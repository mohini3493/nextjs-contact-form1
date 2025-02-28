'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    };
import Link from "next/link"

export default function Testimonial7() {
    return (
        <>

            <div className="testimonial7-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-auto">
                            <div className="tsetimonial7-textarea text-center margin-b60">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Testimonials</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Here's what our clients have to say</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={1000}>
                            <Swiper {...swiperOptions} className="testimonial7-carousel-area owl-carousel">
                                <SwiperSlide className="textimonial7-carousel">
                                    <div className="testimonialimagesauthor7">
                                        <img src="/assets/images/icons/quito3.png" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-18 lineh-28 font-ks weight-500 color-h7 margin-b24 margin-t">"UNITECH helped us streamline our operations and migrate to a new platform effortlessly. Their expertise in technology and understanding of our business needs made a big difference."</p>
                                    <div className="border7" />
                                    <div className="testimonialmans">
                                        <div className="img-textimonial">
                                            <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                        </div>
                                        <div className="img-testimonial">
                                            <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert Lewandowsky</Link>
                                            <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Banbee Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="textimonial7-carousel">
                                    <div className="testimonialimagesauthor7">
                                        <img src="/assets/images/icons/quito3.png" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-18 lineh-28 font-ks weight-500 color-h7 margin-b24 margin-t">"The UNITECH team is highly professional and knowledgeable. They delivered our digital transformation project on time and exceeded our expectations."
                                    </p>
                                    <div className="border7" />
                                    <div className="testimonialmans">
                                        <div className="img-textimonial">
                                            <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                        </div>
                                        <div className="img-testimonial">
                                            <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha Healy</Link>
                                            <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="textimonial7-carousel">
                                    <div className="testimonialimagesauthor7">
                                        <img src="/assets/images/icons/quito3.png" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-18 lineh-28 font-ks weight-500 color-h7 margin-b24 margin-t">"UNITECH helped us streamline our operations and migrate to a new platform effortlessly. Their expertise in technology and understanding of our business needs made a big difference."</p>
                                    <div className="border7" />
                                    <div className="testimonialmans">
                                        <div className="img-textimonial">
                                            <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                        </div>
                                        <div className="img-testimonial">
                                            <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert Lewandowsky</Link>
                                            <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Banbee Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="textimonial7-carousel">
                                    <div className="testimonialimagesauthor7">
                                        <img src="/assets/images/icons/quito3.png" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-18 lineh-28 font-ks weight-500 color-h7 margin-b24 margin-t">"The UNITECH team is highly professional and knowledgeable. They delivered our digital transformation project on time and exceeded our expectations."
                                    </p>
                                    <div className="border7" />
                                    <div className="testimonialmans">
                                        <div className="img-textimonial">
                                            <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                        </div>
                                        <div className="img-testimonial">
                                            <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha Healy</Link>
                                            <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
