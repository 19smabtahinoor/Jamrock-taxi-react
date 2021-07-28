import React, { useState } from 'react'
import allCarsInfo from '../../data/jamrock.json'
import Fade from 'react-reveal/Fade'
import { FaUserFriends } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa"
import { FaRegTimesCircle } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"
import { FaTv } from "react-icons/fa"

const CarsCart = () => {
    const [carsData] = useState(allCarsInfo.allCars)
    return (
        <>
            <section className="py-12 bg-gray-50">
                <div className="max-w-screen-lg px-4 mx-auto">
                    <div className="grid grid-cols-1">
                        { 
                            carsData.map(({ id, image, people, bags, price, name }) => {
                                return (
                                    <Fade left>
                                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 bg-white rounded-xl shadow-xl overflow-hidden mb-6">

                                            <div className="col-span-1 p-3 box-border flex justify-center lg:flex-none xl:flex-none 2xl:flex-none px-3">
                                                <img className="object-contain" src={image} alt="car" />
                                            </div>

                                            <div className="col-span-1 p-3 box-border  flex flex-col items-center lg:items-start xl:items-start 2xl:items-start">
                                                <h1 className="text-2xl text-gray-700 font-semibold py-2">{name}</h1>

                                                <div className="flex items-center space-x-3">
                                                    <p className="flex space-x-2 text-lg text-gray-600"><FaUserFriends /><span>{people}</span></p>
                                                    <p className="flex space-x-2 text-lg text-gray-600"><FaShoppingBag /><span>{bags}</span></p>
                                                </div>

                                                <div className="text-sm">
                                                    <p className="flex items-center text-gray-500 space-x-2"><FaRegTimesCircle className="text-green-600"/><span>Free cancellation</span> </p>
                                                    <p className="flex items-center text-gray-500 space-x-2"><FaRegClock className="text-green-600"/><span>1 hour of waiting included</span> </p>
                                                    <p className="flex items-center text-gray-500 space-x-2"><FaTv className="text-green-600"/><span>Meeting with a nameplate</span> </p>
                                                </div>
                                            </div>

                                            <div className="col-span-1 flex flex-col justify-center items-center bg-gray-200 py-4">
                                                <h1 className="text-4xl text-gray-700 font-semibold pb-6">{price}</h1>
                                                <button className="bg-green-600 text-white text-xl rounded-xl shadow-xl px-9 py-2 w-64 hover:bg-green-700">Select</button>
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

export default CarsCart
