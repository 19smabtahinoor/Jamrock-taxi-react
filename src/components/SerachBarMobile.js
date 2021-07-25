import React, { useState, useEffect } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { HiOutlineMinusCircle } from "react-icons/hi"
import { HiOutlinePlusCircle } from "react-icons/hi"
import Zoom from 'react-reveal/Zoom'
import Styled from 'styled-components'
import axios from "axios";

const SerachBarMobile = () => {
    const [userCount, setUserCount] = useState(0)
    const [dropDown, setdropDown] = useState(true)
    const handleClick = () => {
        setdropDown(!dropDown)
    }

    //search bar autocomplete 
    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);
    useEffect(() => {
        const loadCountries = async () => {
            const response = await axios.get("https://restcountries.eu/rest/v2/all");
            setCountries(response.data);
        };

        loadCountries();
    }, []);

    const searchCountries = (text) => {
        if (!text) {
            setCountryMatch([]);
        } else {
            let matches = countries.filter((country) => {
                const regex = new RegExp(`${text}`, "gi");
                return country.name.match(regex) || country.capital.match(regex);
            });

            setCountryMatch(matches);
        }
    };

    return (
        <Wrapper>
            <div className="relative z-50">
                <div className="mb-3 rounded-5">
                    <input type="text" className="form-control" placeholder="From(airport,city or train )" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => searchCountries(e.target.value)} />
                    <input type="text" className="form-control" placeholder="To(airport,city or train )" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => searchCountries(e.target.value)} />
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
                        <div className="relative  bg-white rounded-xl p-6 box-border z-30" style={{ width: "300px" }}>
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
                {

                }
                <div className="absolute left-6 top-20 rounded-xl p-6 box-border z-30 w-full" >
                    {countryMatch &&
                        countryMatch.map((item, index) => (

                            <p className="text-gray-600 border-b border-gray-200 bg-white py-2 m-0 px-3 shadow-xl" key={index}>{item.name}</p>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = Styled.section`

input.form-control {
    width: 100%;
    margin: 19px 0px;
    padding:10px 10px;
}

button.btn.dropdown-toggle.bg-white.text-muted {
    width: 100%;
    margin-bottom: 19px;
    padding:10px 0px;

}

button#button-addon2 {
    width: 100%;
}

`
export default SerachBarMobile
