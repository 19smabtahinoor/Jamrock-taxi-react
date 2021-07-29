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
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
