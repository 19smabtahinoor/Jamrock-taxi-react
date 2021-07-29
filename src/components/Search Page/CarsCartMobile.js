import React, { useState } from 'react'
import allCarsInfo from '../../data/jamrock.json'
import Fade from 'react-reveal/Fade'
import { FaUserFriends } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa"
import { FaRegTimesCircle } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"
import { FaTv } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const CarsCartMobile = () => {

    const [carsData] = useState(allCarsInfo.allCars)

    return (
        <>
        <section className="py-12 bg-gray-50">
            <div className="max-w-screen-lg px-4 mx-auto">
                    <div className="grid grid-cols-1">
                        {
                            carsData.map(({ id, image, people, bags, price, name, carDescription}) => {
                                return (
                                    <Fade left>
                                        <div className="grid grid-cols-1 bg-white rounded-lg shadow-xl overflow-hidden mb-6">

                                            <div className="flex p-6 items-center border-b border-gray-200">
                                                <h1 className="text-2xl text-gray-700 font-semibold py-2 flex-grow">{name}</h1>

                                                <div className="flex items-center space-x-3">
                                                    <p className="flex items-center space-x-2 text-lg text-gray-400"><FaUserFriends /><span>{people}</span></p>
                                                    <p className="flex items-center space-x-2 text-lg text-gray-400"><FaShoppingBag /><span>{bags}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 px-3 border-b border-gray-200">
                                                <img className="object-contain w-52 " src={image} alt="car" />

                                                <p className="text-gray-400 text-sm">{carDescription}</p>
                                            </div>

                                            <div className=" p-3 box-border  flex flex-col items-start">
                                               

                                                <div className="text-sm ">
                                                    <p className="flex items-center text-green-600 space-x-2"><FaRegTimesCircle className="text-green-600" /><span className="text-semibold">Free cancellation</span> </p>
                                                    <p className="flex items-center text-gray-500 space-x-2"><FaRegClock className="text-green-600" /><span>1 hour of waiting included</span> </p>
                                                    <p className="flex items-center text-gray-500 space-x-2"><FaTv className="text-green-600" /><span>Meeting with a nameplate</span> </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center  px-4 py-4 border-t border-gray-200">
                                                <h1 className="text-2xl text-gray-700 font-semibold pb-6 text-center">{price}</h1>
                                                <NavLink to={`/car-cart/${id}`}>
                                                    <button className="bg-green-600 text-white text-lg rounded shadow-xl px-9 py-2 w-full hover:bg-green-700" >Select</button>
                                                </NavLink>

                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarsCartMobile
