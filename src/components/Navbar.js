import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="block h-20">
                <nav className="navbar navbar-expand-lg navbar-light shadow-lg fixed-top bg-white ">
                    <div className="container-fluid px-5">
                        <NavLink className="navbar-brand me-5" to="/">
                            <img src="../../assets/logo.jpg" alt="logo" width="150px" height="100px" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link cursor-pointer text-gray-600" to="/contact">Contact Us</NavLink>
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
