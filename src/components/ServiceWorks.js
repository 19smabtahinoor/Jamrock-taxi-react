import React, { useState } from 'react'
import Styled from 'styled-components'
import serviceWorkInfos from '../data/jamrock.json'
import Fade from 'react-reveal/Fade';

const ServiceWorks = () => {
    const [serviceworksData] = useState(serviceWorkInfos.serviceWorksInfo)
    return (
        <Wrapper>
            <section className="py-4">
                <div className="container px-4">
                    <Fade left>
                        <h1 className="text-left text-gray-700 font-semibold text-3xl">How to service works</h1>
                    </Fade>

                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-2 py-3">
                        {serviceworksData.map(({ id, title, description }) => {
                            return (
                                <>
                                    <Fade left>
                                        <div className="service__card bg-white shadow-sm p-4 box-border rounded-xl" key={id}>
                                            <p className="text-3xl text-white bg-success p-1 inline-block w-12 h-12 rounded-full text-center">{id}</p>
                                            <div>
                                                <h6 className="text-gray-700 font-semibold text-lg">{title}</h6>
                                                <p className="text-gray-400 text-sm">{description}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
const Wrapper = Styled.section`
.service__card{
    /* width:30%; */
}

`

export default ServiceWorks
