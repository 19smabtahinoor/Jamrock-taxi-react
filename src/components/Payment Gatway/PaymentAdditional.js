import React, { useState, useEffect } from 'react'
import { MdDirectionsCar } from "react-icons/md"
import { MdDateRange } from "react-icons/md"
import { MdRemoveCircle } from "react-icons/md"
import { MdAddCircle } from "react-icons/md"
import StripeContainer from '../Payment Gatway/StripeContainer'
import { useParams } from "react-router-dom"
import allCarsInfo from '../../data/jamrock.json'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

const PaymentAdditional = () => {
    const [passengerCount, setPassengerCount] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const [showItem, setShowItem] = useState(false)
    const [name, setName] = useState("");
    const [people, setPeople] = useState("");
    const [bags, setBags] = useState("");
    const [price, setPrice] = useState("");
  

    const { id } = useParams()
    useEffect(() => {
        const newCar = allCarsInfo.allCars.find((carsItem) => carsItem.id === parseInt(id))
        setName(newCar.name);
        setPeople(newCar.people);
        setBags(newCar.bags);
        setPrice(newCar.amount);
    }, [id]);

    //passenger count 
    const addPassenger = () => {
        setPassengerCount(passengerCount + 1)
        if (passengerCount === people) {
            setPassengerCount(people)
            alert("You can't add passengers more!!!")
        }
    }

    const decreasePassenger = () => {
        setPassengerCount(passengerCount - 1)
        if (passengerCount === 1) {
            setPassengerCount(1)
            alert("You can't decrease anymore")
        }
    }




    return (
        <>
            {showItem ? <StripeContainer /> :
                <>
                    <section className="my-20">
                        <div className="container">

                            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">

                                <div className="col-span-2 overflow-x-hidden transfer_details_wrapper">

                                    <div className="bg-white rounded-lg shadow-xl p-8 box-border">
                                        <h4 className="text-gray-800 text-xl font-bold pb-3">Transfer Details</h4>

                                        {/* ticket info  */}
                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="formticketInput" className="form-label "><span className="text-sm font-semibold text-gray-600">Arrival flight number according to the ticket *</span></label>
                                                <input type="text" className="form-control py-2" id="formticketInput" placeholder="FS-3312" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formDateInput" className="form-label "><span className="text-sm font-semibold text-gray-600">Date and time of arrival according to the ticket *</span></label><br />
                                                <div className="flex items-center space-x-5">
                                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border border-gray-300 rounded-md py-2 px-3 text-gray-500 w-100 focus:outline-none flex-grow" id="formDateInput" />
                                                    <TimePicker
                                                        onChange={onChange}
                                                        value={value}
                                                        className="border border-gray-300 rounded-md text-gray-500 py-2 px-3 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="formAddressInput" className="form-label "><span className="text-sm font-semibold text-gray-600">Destination: address or hotel name *</span></label>
                                                <input type="text" className="form-control py-2" id="formAddressInput" placeholder="Radisson Hotel" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* passengers  */}
                                    <div className="bg-white rounded-lg shadow-xl p-8 box-border my-4">
                                        <h4 className="text-gray-800 text-xl font-bold pb-3">Passengers</h4>

                                        <div>
                                            <div className="flex items-center">
                                                <div className="flex flex-col flex-grow">
                                                    <h5 className="text-gray-600 text-base">Indicate the number of passengers</h5>
                                                    <span className="text-gray-400 text-sm">Including children and infants</span>
                                                </div>

                                                <div className="flex items-center space-x-4 bg-gray-100 px-2 py-2 rounded-pill">
                                                    <MdRemoveCircle className="text-3xl text-green-600 cursor-pointer hover:text-green-700" onClick={decreasePassenger} />
                                                    <span className="text-gray-500 text-lg">{passengerCount}</span>
                                                    <MdAddCircle className="text-3xl text-green-600 cursor-pointer hover:text-green-700" onClick={addPassenger} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* passengers details  */}
                                    <div className="bg-white rounded-lg shadow-xl p-8 box-border my-4">
                                        <h4 className="text-gray-800 text-xl font-bold pb-3">Passenger's details</h4>

                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="formName" className="form-label "><span className="text-sm font-semibold text-gray-600">Name and surname *</span></label>
                                                <input type="text" className="form-control py-2" id="formName" placeholder="John Doe" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formEmail" className="form-label "><span className="text-sm font-semibold text-gray-600">E-mail*</span></label>
                                                <input type="email" className="form-control py-2" id="formEmail" placeholder="example@gmail.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formNum" className="form-label "><span className="text-sm font-semibold text-gray-600">Phone number with country code*</span></label>
                                                <input type="number" className="form-control py-2" id="formNum" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additiobal Sevices  */}
                                    <div className="bg-white rounded-lg shadow-xl p-8 box-border my-4">
                                        <h4 className="text-gray-800 text-xl font-bold pb-3">Additional services and goods</h4>

                                        <div className="grid grid-cols-1 border-b border-gray-300 py-3">
                                            <div className="col-span-1">
                                                <label htmlFor="inputDrinks" className="form-label"><span className="text-sm font-semibold text-gray-600">Choose your favourite one</span></label>
                                                <select id="inputDrinks" className="form-select">
                                                    <option value="Choose drinks..">Choose drinks...</option>
                                                    <option>750 ml bottle of champagne</option>
                                                    <option>Includes 2 champagne flutes per bottle</option>
                                                    <option>Presented privately inside the vehicle</option>
                                                    <option>Served on arrival or departure – your choice</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* deparature and   arival          */}
                                        
                                        <div className="flex items-center py-4">
                                            <span className="text-gray-600 text-base flex-grow">
                                                Choose any option
                                            </span>
                                            <div className="flex items-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioselect" id="radioArival" />
                                                    <label className="form-check-label text-gray-500" htmlFor="radioArival">
                                                        On Arrival
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioselect" id="radioDeparature" />
                                                    <label className="form-check-label text-gray-500" htmlFor="radioDeparature">
                                                        On Departure
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                   


                                        <button className="flex justify-center w-full text-white mt-3 bg-green-600  hover:bg-green-700 border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => setShowItem(true)}>Continue</button>
                                    </div>

                                </div>

                                {/* booking details  */}
                                <div className="sticky top-24 col-span-1 rounded-xl shadow-lg overflow-hidden" style={{ height: ' 27rem' }}>
                                    <div className="flex items-center space-x-3 bg-gray-500 px-6 py-2 box-border">
                                        <div>
                                            <MdDirectionsCar className="bg-white w-9 h-9 rounded-full p-2" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-base text-white font-semibold">{name}</span>
                                            <span className="text-sm text-white">up to {people} passengers, {bags} pices of baggage</span>
                                        </div>
                                    </div>

                                    {/* time and date  */}
                                    <div className="flex items-center space-x-3 px-6 pt-3 box-border">
                                        <MdDateRange className="text-gray-400 text-sm" />
                                        <span className="text-gray-700 text-sm">{startDate.getDate()}.{startDate.getMonth()}.{startDate.getFullYear()}</span>
                                        <span className="text-gray-400 text-sm">{value}</span>
                                    </div>

                                    <div className="p-6 box-border">
                                        <div className="flex flex-col justify-center space-y-4 border-b border-gray-300 pb-6">
                                            <div className="flex h-12 pt-3 items-center bg-green-100 rounded-lg px-4">
                                                <p className="text-gray-700 font-semibold flex-grow">Additional services </p>
                                                <p className="text-gray-700 font-semibold">0 USD</p>
                                               
                                            </div>
                                            <div className="flex h-12 pt-3 items-center bg-yellow-100 rounded-lg px-4">
                                                <p className="text-gray-700 font-semibold flex-grow">Cancellation service</p>
                                                <p className="text-gray-700 font-semibold"> 6 USD</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* total  */}
                                    <div className="flex flex-col justify-center p-6 -pt-4 box-border space-y-4">
                                        <div className="flex items-center border-b border-gray-300 pb-3">
                                            <h2 className="text-gray-700 text-uppercase flex-grow text-2xl">Total:</h2>
                                            <h2 className="text-green-600 font-bold text-2xl">
                                                {price} USD
                                            </h2>
                                       
                                        </div>

                                        <div className="flex items-center">
                                            <span className="flex-grow text-gray-400">To pay by car</span>
                                            <span className="text-gray-600 font-semibold">
                                                {price} USD
                                            </span>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default PaymentAdditional
