import React, { useState } from 'react'
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";

const SearchBarInput2 = ({ isScriptLoaded, isScriptLoadSucceed }) => {

    const [address, setAddress] = useState("");
    const handleChange = (value) => {
        setAddress(value);
    };

    const handleSelect = (value) => {
        setAddress(value);
    };


    if (isScriptLoaded && isScriptLoadSucceed) {
        return (
            <>
              
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
                                    
                                    
                                    <input type="text" className="form-control"
                                            {...getInputProps({
                                                placeholder: "To(airport,city or train )"
                                    })} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                       


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
                        
                 

            </>
        )
    } else {
        return <div></div>;
    }

}


export default scriptLoader([
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Wfv6IK4HBOlEG8fdFzEzaIBpT_QRLmI&libraries=places`
])(SearchBarInput2);



