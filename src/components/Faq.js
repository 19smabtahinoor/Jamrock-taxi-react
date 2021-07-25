import React, { useState } from 'react'
import faq from '../data/jamrock.json'
import Fade from 'react-reveal/Fade'
import { FaRegEnvelope } from "react-icons/fa"
import { FaRocketchat } from "react-icons/fa"
import { FaClock } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

const Faq = () => {
    const [faqsData] = useState(faq.faqData)
    const [clicked, setClicked] = useState(false)

    const toggleFaq = (id) => {
        if (clicked === id) {
            return setClicked(false)
        }
        setClicked(id)
    }

    return (
        <>
            <section className="bg-white">
                <div className="container px-4 py-5">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 g-4">
                        <div>
                            <Fade left>
                                <h1 className="text-left text-gray-700 font-semibold text-3xl mb-3">Faq</h1>
                            </Fade>

                            <div>
                                {faqsData.map(({ id, question,answer}) => {
                                    return(
                                        <>
                                            <Fade left>
                                                <div key={id} className="py-2">
                                                    <h4 className="text-blue-600 font-semibold text-lg cursor-pointer" onClick={() => toggleFaq(id)}>{question}</h4>
                                                    {clicked === id ? (
                                                        <p className="text-gray-400 text-sm w-96">{answer}</p>
                                                    ) : null}
                                                  
                                                </div>

                                            </Fade>
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                        <div>
                            <Fade left>
                                <div className="rounded-xl p-8 box-border" style={{ backgroundColor: "#fbf4e3" }}>
                                    <h1 className="text-left text-gray-700 font-semibold text-3xl mb-3">Help</h1>

                                    <div>
                                        <p className="text-gray-600 font-bold">For any questions</p>
                                        <ul style={{listStyle:'none'}}>
                                            <li className="flex items-center space-x-2 py-2"><FaRegEnvelope className="text-yellow-600 text-xl" /><span className="text-blue-600">hello@jamrocktaxi.com</span></li>
                                            <li className="flex items-center space-x-2"><FaRocketchat className="text-yellow-600 text-xl" /><span className="text-blue-600">Ask our consultant</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 font-bold">Question on the existing booking</p>
                                        <ul style={{listStyle:'none'}}>
                                            <li className="flex items-center space-x-2 py-3"><FaClock className="text-yellow-600 text-sm" /><span className="text-sm"> We are available 24/7</span></li>
                                            <li className="flex items-center space-x-2"><FaPhoneAlt className="text-yellow-600 text-xl" /><span className="text-blue-600">+44 20 8068 2801</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    

                </div>

            </section>
        </>
    )
}

export default Faq
