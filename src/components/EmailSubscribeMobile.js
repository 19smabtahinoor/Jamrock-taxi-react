import React from 'react'
import Fade from 'react-reveal/Fade'

const EmailSubscribeMobile = () => {
    return (
        <>
            <section className="email__subscribe">
                <div className="container px-4 py-12">
                    <Fade left>
                        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-4xl py-9 font-semibold">Ticket sales, travel guides, <br />and secret discounts in your inbox</h1>
                    </Fade>

                    <Fade left>
                        <div className="mb-3 rounded-5 w-100 mx-auto">
                            <input type="email" className="form-control py-2" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                            <button className="btn btn-warning text-dark w-100 mt-3" type="button" id="button-addon2">
                                Subscribe
                            </button>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default EmailSubscribeMobile
