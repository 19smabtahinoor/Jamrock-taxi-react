import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51JIFS2Eo074EZPgfAAwblk9LuLgJlodeEhnMsbXGnvklYL5bTyx5gr3XggJHcS0SNLoNTpR1pyDbS2b4ycpQ9zgi001Ikl0hg7"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
