import React, { useState } from 'react'
import { FcButtingIn } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom'
import CountryList from '../data/jamrock'
import CurrencyList from '../data/jamrock'

const Navbar = () => {
    const [countryData] = useState(CountryList.countryList)
    const [CurrencyData] = useState(CurrencyList.currencyList)

    return (
        <>
            <header className="block h-20">
                <nav className="navbar navbar-expand-lg navbar-light shadow-lg fixed-top bg-white ">
                    <div className="container-fluid px-5">
                        <NavLink className="navbar-brand me-5" to="/">
                            <img src="../../assets/logo.jpg" alt="logo" width="150px" height="100px" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ">
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="text-sm text-gray-400">For customers</span>
                                    </NavLink>
                                    <Zoom>
                                        <ul className="dropdown-menu shadow-sm mt-4" aria-labelledby="navbarDropdown">
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400">Transfer</span></span></li>
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400">Kiwitaxi System</span></span></li>
                                        </ul>
                                    </Zoom>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="text-sm text-gray-400">For partners</span>
                                    </NavLink>
                                    <Zoom>
                                        <ul className="dropdown-menu shadow-sm mt-4" aria-labelledby="navbarDropdown">
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400">For travel agencies</span></span></li>
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400 text-gray-400">For webmasters</span></span></li>
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400 text-gray-400">For transfer compnaies</span></span></li>
                                            <li><span className="dropdown-item"><span className="text-sm text-gray-400">For individual drivers</span></span></li>
                                        </ul>
                                    </Zoom>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link active" aria-current="page" to="/"><span className="text-sm text-gray-400">Car rental with driver</span></NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link d-flex align-items-center" to="/">
                                        <FcButtingIn />
                                        <span className="text-sm text-gray-400 pl-2"> Ski transfer</span>
                                    </NavLink>
                                </li>
                            </ul>


                            {/* Right side content of nav bar  */}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="text-sm text-gray-400">BYN</span>
                                    </NavLink>

                                    <Zoom>
                                        <ul className="dropdown-menu shadow-sm mt-4 px-2" aria-labelledby="navbarDropdown">
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
                                <li className="nav-item dropdown me-2 border-end border-secondary pe-3">
                                    <NavLink className="nav-link " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="w-6 h-6" src="../../assets/Flag/united-kingdom.png" alt="united-kingdom flag" />
                                    </NavLink>

                                    <Zoom>
                                        <ul className="dropdown-menu shadow-sm mt-4 px-3" aria-labelledby="navbarDropdown">
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

                                <li className="nav-item me-2">
                                    <NavLink className="nav-link active" aria-current="page" to="/"><span className="text-sm text-gray-400">Help</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link cursor-pointer text-gray-600" to="/contact"><span className="text-sm text-gray-400">Contact Us</span></NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <button className="btn px-4 py-1 border border-secondary rounded-3"><span className="text-sm text-gray-400">Login</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar


