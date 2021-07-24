import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Cars from '../data/jamrock.json'
import plans from '../data/jamrock.json'
import Searchbar from './Searchbar'

const Fleet = () => {
    const [cardsData] = useState(Cars.allcars)
    const [planData] = useState(plans.plansData)
    return (
        <>
            <section className="bg-white">
                <div className="container px-4 py-5">
                    <Fade left>
                        <h1 className="text-left text-gray-700 font-semibold text-3xl mb-3">Fleet</h1>
                    </Fade>

                    {/* cars  */}
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-4 border-b border-gray-300 mb-3">
                        {cardsData.map(({ id, image, title, desc }) => {
                            return (
                                <Fade left>
                                    <div key={id} className="flex flex-col items-center lg:items-start xl:items-start pb-9">
                                        <img className="img-fluid" src={image} alt="cars" />
                                        <p className="font-semibold text-gray-700 text-lg">{title}</p>
                                        <span className="text-sm text-gray-400">{desc}</span>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>

                    {/* additional infos  */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4">
                        <Fade left>
                            <div className="flex flex-col items-center lg:items-start xl:items-start pb-9">
                                <p className="font-semibold text-gray-600">Additional services</p>
                                <span className="text-sm text-gray-400">Available for an extra fee <br /> depending on the route.</span>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="flex flex-row items-center lg:items-end xl:items-end pb-9 space-x-4">
                                <span className="text-green-600 bg-green-100 px-3 py-2 rounded-lg">Drinking Water</span>
                                <span className="text-green-600 bg-green-100 px-3 py-2 rounded-lg">Child Seats</span>
                                <span className="text-green-600 bg-green-100 px-3 py-2 rounded-lg">English-Speaking</span>
                            </div>
                        </Fade>
                    </div>

                    {/* plan  */}
                    <div className="rounded-xl p-9 box-border my-12" style={{ backgroundColor:"#fbf4e3"}}>
                        <Fade left>
                            <h1 className="text-left text-gray-700 font-semibold text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-10">We make sure everything goes according to your plan</h1>
                        </Fade>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-4 mb-3">
                            {planData.map(({ id, title, desc }) => {
                                return (
                                    <>
                                        <Fade left>
                                            <div className="flex flex-col items-center lg:items-start xl:items-start pb-9" key={id}>
                                                <p className="text-lg font-semibold text-gray-600 w-48">{title}</p>
                                                <span className="text-sm text-gray-400">{desc}</span>
                                            </div>
                                        </Fade>
                                    </>
                                )
                            })}
                        </div>

                        {/* search */}
                        <div className="rounded-xl py-6 px-5" style={{ backgroundColor: "#f8e9c6" }}>
                             <Fade left>
                                <Searchbar />
                             </Fade>

                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Fleet
