import React from 'react'
import Styled from 'styled-components'
import { HiOutlineMail } from "react-icons/hi"
import { HiPhone } from "react-icons/hi"
import { HiOutlineLocationMarker } from "react-icons/hi"


const Contact = () => {
    return (
        <Wrapper>
            <section className="contact__section bg-gray-100 ">
                <div className="container px-4 py-9">
                    <div className="flex flex-col flex-wrap justify-center items-center pt-9">
                        <h1 className="font-bold text-gray-700">We are here to help!</h1>
                        <p className="text-lg text-gray-500 text-center">Still can’t find what you are looking for? Need a transfer for more than 15 people? We would be <br/> happy to help!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4 gap-12">

                        {/* email us  */}
                        <div className="bg-white shadow-md rounded-lg p-7 box-border">
                            <div className="flex flex-col justify-center items-center py-3">
                                <HiOutlineMail className="text-yellow-500 text-5xl"/>
                                <h2 className="text-gray-600 text-center text-3xl py-2">Email us</h2>
                                <p className="text-center text-gray-500">Email us for general queries and partnership opportunities</p>
                                <a href="https://mail.google.com/" target="_blank" rel="noreferrer"className="text-decoration-underline text-gray-600 text-xl hover:text-yellow-500">hello@jamrocktaxi.com</a>
                            </div>
                        </div>

                        {/* Call us  */}
                        <div className="bg-white shadow-md rounded-lg p-7 box-border">
                            <div className="flex flex-col justify-center items-center py-3">
                                <HiPhone className="text-yellow-500 text-5xl" />
                                <h2 className="text-gray-600 text-center text-3xl py-2">Call us</h2>
                                <p className="text-center text-gray-500">We are available 24h / 7 <br/>on a number local to you.</p>

                                <div>
                                    <ul className="text-gray-700 font-bold text-lg text-justify p-0" style={{listStyle:'none'}}>
                                        <li className="hover:text-yellow-500 cursor-pointer">US: +1 217 636 4160</li>
                                        <li className="hover:text-yellow-500 cursor-pointer">UK: +44 7985 190947</li>
                                        <li className="hover:text-yellow-500 cursor-pointer">JA: +1 (876) 438-5432</li>
                                    </ul>
                                </div>
                                <a href="https://api.whatsapp.com/send/?phone=447985190947&text&app_absent=0" target="_blank" rel="noreferrer" className="text-decoration-none text-blue-600 text-xl hover:text-yellow-500 block text-center font-semibold">Chat On WhatsApp? Click Me</a>
                            </div>
                        </div>

                        {/* location  */}
                        <div className="bg-white shadow-md rounded-lg p-7 box-border">
                            <div className="flex flex-col justify-center items-center py-3">
                                <HiOutlineLocationMarker className="text-yellow-500 text-5xl" />
                                <h2 className="text-gray-600 text-center text-3xl py-2">Our Location</h2>
                                <p className="text-center text-gray-500">Montego Bay,<br/>St. James,<br/>Jamaica.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Wrapper>
    )
}


const Wrapper = Styled.section`
.contact__section{
    display:grid;
    place-items:center;
    height: 90vh;
    width:100%;
}
`

export default Contact
