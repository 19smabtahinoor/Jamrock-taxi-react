import React, { useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { HiOutlineMinusCircle } from "react-icons/hi"
import { HiOutlinePlusCircle } from "react-icons/hi"
import Zoom from 'react-reveal/Zoom';
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import SearchBarInput2 from './SearchBarInput2'
import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SerachBarMobile = ({ isScriptLoaded, isScriptLoadSucceed }) => {
    const [userCount, setUserCount] = useState(0)
    const [dropDown, setdropDown] = useState(true)
    const [address, setAddress] = useState("");
    const handleChange = (value) => {
        setAddress(value);
    };

    const handleSelect = (value) => {
        setAddress(value);
    };

    const handleClick = () => {
        setdropDown(!dropDown)
    }
    if (isScriptLoaded && isScriptLoadSucceed) {
        return (
            <Wrapper>
                <div className="relative z-50">
                    <PlacesAutocomplete
                        value={address}
                        onChange={handleChange}
                        onSelect={handleSelect}
                    >
                        {({
                            getInputProps,

                            suggestions,
                            getSuggestionItemProps,
                            loading
                        }) => (
                            <>
                                <div className="input-group mb-3 rounded-5">
                                    <input type="text" className="form-control"
                                        {...getInputProps({
                                            placeholder: "From(airport,city or train )"
                                        })} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <SearchBarInput2 />
                                    <button className="btn dropdown-toggle bg-white text-muted" type="button" onClick={handleClick}>
                                        {userCount} passengers
                                    </button>

                                    <NavLink to="/car-cart">
                                        <button className="btn btn-success" type="button" id="button-addon2">
                                            <p className="text-lg flex items-center justify-center space-x-3 pt-2">
                                                <HiOutlineSearch className="text-lg" />
                                                <span className="font-semibold">Show Prices</span>
                                            </p>
                                        </button>
                                    </NavLink>
                                   

                                </div>

                                <div className="absolute left-0 top-20 rounded-xl p-6 box-border z-30 w-full" >
                                    {loading && <div>Loading....</div>}
                                    {suggestions.map((suggestion) => {
                                        const style = suggestion.active
                                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                            : { backgroundColor: "#ffffff", cursor: "pointer" };

                                        return (
                                            <div {...getSuggestionItemProps(suggestion, { style })}>
                                                <p className="text-gray-600 border-b border-gray-200 bg-white py-2 m-0 px-3 shadow-xl">{suggestion.description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </PlacesAutocomplete>
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
                </div>
            </Wrapper>
        )
    } else{
        return <div></div>;
    }
   
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
export default scriptLoader([
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Wfv6IK4HBOlEG8fdFzEzaIBpT_QRLmI&libraries=places`
])(SerachBarMobile);

