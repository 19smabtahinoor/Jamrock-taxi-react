import React from 'react'
import Fade from 'react-reveal/Fade';

const Partners = () => {
    return (
        <section className="bg-white">
            <div className="container px-4 py-5">
                <Fade left>
                    <h1 className="text-left text-gray-700 font-semibold text-3xl border-b border-gray-300 pb-4 mb-3">Our partners</h1>
                </Fade>

                <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center space-x-12 space-y-9">
                    <Fade left>
                        <img src="../../assets/ita-national-geographic.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                    <Fade left>
                        <img src="../../assets/ita-tonkosti.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                    <Fade left>
                        <img src="../../assets/ita-aeroflot.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                    <Fade left>
                        <img src="../../assets/ita-turister.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                    <Fade left>
                        <img src="../../assets/ita-skyscanner.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                    <Fade left>
                        <img src="../../assets/ita-turister.svg" alt=" partners" width="100px" height="40px" />
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Partners
