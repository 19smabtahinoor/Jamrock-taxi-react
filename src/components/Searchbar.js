import React, { useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { HiOutlineMinusCircle } from "react-icons/hi"
import { HiOutlinePlusCircle } from "react-icons/hi"
import Zoom from 'react-reveal/Zoom';

const Searchbar = () => {
    const [userCount,setUserCount] = useState(0)
    const [dropDown, setdropDown] = useState(true)

    const handleClick = () => {
        setdropDown(!dropDown)
    }

    return (
        <>
            <div className="relative">
                <div className="input-group mb-3 rounded-5">
                    <input type="text" className="form-control" placeholder="From(airport,city or train )" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input type="text" className="form-control" placeholder="To(airport,city or train )" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn dropdown-toggle bg-white text-muted" type="button" onClick={handleClick}>
                       {userCount} passengers
                    </button>
                   
                    <button className="btn btn-success" type="button" id="button-addon2">
                        <p className="text-lg flex items-center justify-center space-x-3 pt-2">
                            <HiOutlineSearch className="text-lg" />
                            <span className="font-semibold">Show Prices</span>
                        </p>
                    </button>
                    
                </div>
                {!dropDown && (
                    <Zoom left>
                    <div className="absolute right-40 bg-white rounded-xl p-6 box-border">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-lg">Passengers</span>
                            <div className="flex items-center space-x-3">
                                <HiOutlineMinusCircle className="text-3xl text-gray-400 cursor-pointer" onClick={() => setUserCount(userCount - 1)} />
                                <span className="text-2xl text-gray-500">{userCount}</span>
                                <HiOutlinePlusCircle className="text-3xl text-gray-400 cursor-pointer" onClick={() => setUserCount(userCount + 1)} />
                            </div>
                        </div>
                    </div>
                    </Zoom>
                )}
            </div>
        </>
    )
}


export default Searchbar
