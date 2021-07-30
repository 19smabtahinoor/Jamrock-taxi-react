import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import allCarsInfo from '../../data/jamrock.json'
import { FaUserFriends } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const CarsDetailsPage = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [people, setPeople] = useState("");
    const [bags, setBags] = useState("");
    const [price, setPrice] = useState("");


    const { id } = useParams()
    useEffect(() => {
        const newCar = allCarsInfo.allCars.find((carsItem) => carsItem.id === parseInt(id))
        setImage(newCar.image);
        setName(newCar.name);
        setPeople(newCar.people);
        setBags(newCar.bags);
        setPrice(newCar.price);
    }, [id]);
    return (
        <>

            <>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className="text-center text-2xl mb-5">Book this car</h1>
                        <div className="lg:w-4/5 mx-auto flex flex-wrap rounded-xl shadow-xl p-6 box-border bg-gray-50 ">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} style={{ width: '400px', height: '400px', objectFit: 'contain' }} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-700 text-3xl title-font font-medium mb-3">{name}</h1>
                                <div className="flex items-center space-x-3">
                                    <p className="flex space-x-2 text-lg text-gray-600"><FaUserFriends /><span>{people}</span></p>
                                    <p className="flex space-x-2 text-lg text-gray-600"><FaShoppingBag /><span>{bags}</span></p>
                                </div>
                                <p className="leading-relaxed text-justify pb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam, recusandae quisquam accusantium veniam autem dolorum illum nulla voluptatum, iste, modi dolor consectetur laborum quidem! Eligendi maiores tempore velit architecto.lorem10 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, consequatur?</p>
                                <div className="flex items-center">
                                    <span className="title-font font-medium text-3xl text-gray-700 flex-grow">{price}</span>
                                    <NavLink to={`/car-cart/details/${id}`} className="text-decoration-none">
                                        <button className="flex ml-auto text-white bg-green-600 text-white hover:bg-green-700 border-0 py-2 px-6 focus:outline-none  rounded" >Book Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/car-cart" className="flex justify-center">
                            <button className="mt-8 text-white bg-green-600 text-white hover:bg-green-700 border-0 py-2 px-9 focus:outline-none rounded ">Back</button>
                        </NavLink>
                    </div>
                </section>
            </>


        </>
    )
}

export default CarsDetailsPage
