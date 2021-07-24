import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import advantagesDatas from '../data/jamrock.json'

const Advantages = () => {
    const [data] = useState(advantagesDatas.advantages)
    return (
        <>
            <section>
                <div className="container px-4 py-5">
                    <Fade left>
                        <h1 className="text-left text-gray-700 font-semibold text-3xl mb-9">Advantages</h1>
                    </Fade>

                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 g-4">
                        {data.map(({ id, title, desc}) => {
                            return(
                                <>
                                    <Fade left>
                                       <div key={id}>
                                           <h4 className="text-semibold text-lg text-gray-700">
                                               {title}
                                           </h4>
                                           <p className="text-sm text-gray-400 text-justify">
                                               {desc}
                                           </p>
                                       </div>
                                    </Fade>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages
