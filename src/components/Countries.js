import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import CountryList from '../data/jamrock.json'
import Airports from './Airports'

const Countries = () => {
    const [countryData] = useState(CountryList.allcountries)

    return (
        <>
            <section className="bg-gray-100">
                <div className="container px-4 py-5">
                    <Fade left>
                        <h4 className="text-left text-gray-700 font-semibold text-2xl mb-3">Countries</h4>
                    </Fade>

                    <div className="row row-cols-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 border-b border-gray-300  pb-8">
                        {
                            countryData.map(({ id, name}) => {
                                return(
                                    <>
                                        <Fade left>
                                            <p className="text-blue-600 py-1" key={id}>
                                                {name}
                                            </p>

                                        </Fade>
                                    </>
                                )
                            })
                        }
                    </div>

                    <Airports/>
                </div>
            </section>
        </>
    )
}

export default Countries
