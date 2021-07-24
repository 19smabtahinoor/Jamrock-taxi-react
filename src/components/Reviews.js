import React from 'react'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
    return (
        <Wrapper>
            <section className="py-10">
                <div className="bg-gray-100">
                    <div className="container px-4 py-5">

                        <Fade left>
                            <h1 className="text-left text-gray-700 font-semibold text-3xl">2801 reviews with an average rating of 4.7 / 5
                            </h1>
                        </Fade>

                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-4 py-4">
                            <Fade left>
                                <div className="flex flex-col items-center lg:items-start xl:items-start">
                                    <img className="w-40 h-12 object-contain" src="../../assets/ita-google.svg" alt="" />
                                    <span className="text-sm text-gray-500">4,8 -802 reviews</span>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className="flex flex-col items-center lg:items-start xl:items-start">
                                    <img className="w-40 h-12 object-contain" src="../../assets/ita-reviews.svg" alt="" />
                                    <span className="text-sm text-gray-500">4,8 -802 reviews</span>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className="flex flex-col items-center lg:items-start xl:items-start">
                                    <img className="w-40 h-12 object-contain" src="../../assets/ita-trip.svg" alt="" />
                                    <span className="text-sm text-gray-500">4,8 -802 reviews</span>
                                </div>
                            </Fade>
                        </div>


                        <div>
                            <ReviewsSlider />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = Styled.section`
`
export default Reviews
