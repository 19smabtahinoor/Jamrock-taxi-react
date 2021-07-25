import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import CurrencyList from '../data/jamrock'
import CountryList from '../data/jamrock'
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    const [countryData] = useState(CountryList.countryList)
    const [CurrencyData] = useState(CurrencyList.currencyList)

    return (
        <>
            <footer style={{ backgroundColor: "#263238" }}>
                <div className="container px-5 py-8">
                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4  pb-8 pt-6">

                        <div>
                            <p className="text-sm text-white pb-2">Jamrocktaxi system</p>
                            <p className="text-sm text-white pb-2">FAQ</p>
                            <p className="text-sm text-white pb-2">Contact information</p>
                        </div>

                        <div>
                            <p className="text-sm text-white pb-2 ">✓ Free Waiting Time</p>
                            <p className="text-sm text-white pb-2">✓ Free Cancellation</p>
                            <p className="text-sm text-white pb-2">✓ Free Meeting & Greet</p>
                            <p className="text-sm text-white pb-2">✓ Tourism Certified Drivers & Vehicles</p>
                        </div>

                        <div>
                            <p className="pb-2 flex items-center space-x-3 ">
                                <FaFacebook className="text-lg text-white" />
                                <span className="text-sm text-white">Facebook</span>
                            </p>
                            <p className="pb-2 flex items-center space-x-3 ">
                                <FaInstagram className="text-lg text-white" />
                                <span className="text-sm text-white">Instagram</span>
                            </p>
                            <p className="pb-2 flex items-center space-x-3 ">
                                <FaEnvelope className="text-lg text-white" />
                                <span className="text-sm text-white">hello@jamrocktaxi.com</span>
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-center">
                            <li className="nav-item dropdown me-2">
                                <NavLink className="nav-link " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="text-sm text-gray-400 px-4 py-2 rounded-lg border border-white">BYN</span>
                                </NavLink>

                                <Zoom>
                                    <ul className="dropdown-menu shadow-sm mt-4" aria-labelledby="navbarDropdown">
                                        {CurrencyData.map(({ id, currency, currencyName }) => {
                                            return (
                                                <>
                                                    <li key={id}>
                                                        <span className="dropdown-item">
                                                            <div className="flex items-center pr-3 space-x-3 ">
                                                                <span className="text-lg text-blue-800 font-semibold">{currency}</span>
                                                                <span className="text-sm text-gray-500">{currencyName}</span>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </Zoom>

                            </li>

                            <li className="nav-item dropdown me-2 ">
                                <NavLink className="nav-link " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="w-8 h-8" src="../../assets/Flag/united-kingdom.png" alt="united-kingdom flag" />
                                </NavLink>

                                <Zoom>
                                    <ul className="dropdown-menu shadow-sm mt-4 " aria-labelledby="navbarDropdown">
                                        {countryData.map(({ id, countryName, countryFlag }) => {
                                            return (
                                                <>
                                                    <li key={id}>
                                                        <span className="dropdown-item">
                                                            <div className="d-flex align-items-center pr-3">
                                                                <img src={countryFlag} alt="flag" className="w-6 h-6 me-2" />
                                                                <span className="text-lg text-gray-500">{countryName}</span>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </Zoom>
                            </li>

                        </div>
                    </div>

                    {/* footer bottom content  */}

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                        <Fade left>
                            <div className="flex items-center space-x-5 justify-center md:justify-start lg:justify-start xl:justify-start">
                                <img src="../../assets/visa.svg" alt="visa" width="80px" />
                                <img src="../../assets/mastercard.svg" alt="mastercard" width="80px" />
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="flex items-center space-x-4 justify-center md:justify-end lg:justify-end xl:justify-end -mt-0 md:-ml-28 lg:-ml-28 xl:-ml-28">
                                <img src="../../assets/app-apple-en.png" alt="app" width="100px" />
                                <img src="../../assets/app-google-en.png" alt="google" width="100px" />
                            </div>
                        </Fade>

                    </div>


                    {/* copyright text  */}
                    <div className="flex flex-col justify-center items-center py-12 space-y-3">
                        <img src="../../assets/logo.jpg" alt="logo" width="150px" height="100px" />
                        <p className="text-center text-white text-sm">
                            © Jamrock taxi Terms and Conditions
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
