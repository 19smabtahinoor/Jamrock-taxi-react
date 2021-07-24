import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import AirportList from '../data/jamrock.json'

const Airports = () => {
    const [airportData] = useState(AirportList.allairports)

    return (
        <>
            <section className="bg-gray-100">
                <div className="container py-5">
                    <Fade left>
                        <h4 className="text-left text-gray-700 font-semibold text-2xl mb-3">Airports</h4>
                    </Fade>

                    <div className="row row-cols-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 pb-8">
                        {
                            airportData.map(({ id, name }) => {
                                return (
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
                </div>
            </section>
        </>
    )
}

export default Airports
