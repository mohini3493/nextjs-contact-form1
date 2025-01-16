'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,

		breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    };
import Link from "next/link"

export default function Slider7() {
    return (
        <>
            <div className="parallax-slider slider-wrap">
                <Swiper {...swiperOptions} className="owl-carousel" navigation={true} modules={[Navigation]}>
                    <SwiperSlide style={{ backgroundImage: 'url("/assets/images/108537.jpg")' }}>
                        <div className="swiper-slide--inner">
                            <div className="slide--bg">
                                <div className="slide-bg--inner"></div>
                            </div>
                            <div className="slide-main--heading">
                                <div className="from-left">Quality and Performance Engineering</div>
                            </div>
                        </div>                                    
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: 'url("/assets/images/2150038411.jpg")' }}>
                        <div className="swiper-slide--inner">
                            <div className="slide--bg">
                                <div className="slide-bg--inner"></div>
                            </div>
                            <div className="slide-main--heading">
                                <div className="from-left">Digital Transformation</div>
                            </div>
                        </div>                                    
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: 'url("/assets/images/4239567_90440.jpg")'}}>
                        <div className="swiper-slide--inner">
                            <div className="slide--bg">
                                <div className="slide-bg--inner"></div>
                            </div>
                            <div className="slide-main--heading">
                                <div className="from-left">Artificial Intelligence (AI)</div>
                            </div>
                        </div>                                    
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundImage: 'url("/assets/images/16265802_rm373-503.jpg")' }}>
                        <div className="swiper-slide--inner">
                            <div className="slide--bg">
                                <div className="slide-bg--inner"></div>
                            </div>
                            <div className="slide-main--heading">
                                <div className="from-left">Cloud Services</div>
                            </div>
                        </div>                                    
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
