import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "axios";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import allCarsInfo from '../../data/jamrock.json';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#047857",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#047857" }
        },
        invalid: {
            iconColor: "red",
            color: "red"
        }
    }
};

const PaymentForm = () => {
    const [carsData] = useState(allCarsInfo.allCars)
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("https://jamrock-server.herokuapp.com/payment", {
                    amount: carsData[1].amount * 100,                           
                    id   
                })

                if (response.data.success) {
                    console.log("Successful Payment")
                    alert('Payment Successful')
                    setSuccess(true)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <div>
            {!success ?
                <section className="py-12" >
                    <div className="max-w-screen-md px-4 mx-auto pt-36" >
                        <form onSubmit={handleSubmit}>
                            <fieldset className="FormGroup">
                                <div className="FormRow">
                                    <CardElement options={CARD_OPTIONS} />
                                </div>
                            </fieldset>
                            <button  className="mt-8 text-white bg-green-600 text-white hover:bg-green-700 border-0 py-2 px-9 focus:outline-none rounded w-full">Pay</button>
                        </form>
                    </div>
                </section>
                :
                <section section className="py-12" >
                    <div className="max-w-screen-md px-4 mx-auto pt-36" >

                        <h2 className="text-green-600 text-xl text-center">Booking Successful !!!!!</h2>
                        <img className="img-fluid w-80 mx-auto" src="../../../assets/Successful purchase-pana.png" alt="payment successful" />

                        <NavLink to="/car-cart" className="flex justify-center">
                            <button className="mt-8 text-white bg-green-600 text-white hover:bg-green-700 border-0 py-2 px-9 focus:outline-none rounded ">Back</button>                       
                         </NavLink>
                    </div>
                </section>
            }
        </div>
    )
}

export default PaymentForm
