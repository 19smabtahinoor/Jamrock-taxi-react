import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import reviewsData from '../data/jamrock.json'
import Fade from 'react-reveal/Fade';

import SwiperCore, {
  Navigation,Pagination
} from 'swiper/core';
SwiperCore.use([Navigation,Pagination]);


const ReviewsSlider = () => {
    const [reviews] = useState(reviewsData.allreviews)
    return (
        <div>
            <Swiper 
            spaceBetween={50} 
            slidesPerView={3} 
            navigation={true} 
            pagination={true} 
            history={{
                "key": "slide"
            }} 
            grabCursor={true}
            centeredSlides={false}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                    425:{
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 1,

                    },
                    768:{
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
            className="mySwiper"
            >
                {
                    reviews.map(({ id, reviews, author}) => {
                        return(
                            <>
                            <Fade left>
                                <SwiperSlide key={id}>
                                    <div className="bg-white rounded-xl shadow-xl p-6 box-border">
                                        <p className="text-gray-400 text-sm pb-4">{reviews}</p>
                                        <span className="text-gray-600">{author}</span>
                                    </div>
                                </SwiperSlide>
                            </Fade>
                            </>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ReviewsSlider
