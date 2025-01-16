"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/app/ContactForm";

export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: ""
    });
    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return (
        <>
            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Contact Us">
                <div>
                    <div className="contcatinner2-scetio-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact2-all-contact contact2inner">
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                            <h1 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Have a project in mind? Let's bring it to life together!</h1>
                                        
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">At UNITECH, we stand by your side with tailored IT solutions that make your business succeed. We provide expert guidance, IT services, and staffing solutions. Our team is ready to help, and we work closely with you to understand your goals and deliver results that matter.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Feel free to contact us for questions or ideas about a project. We are serious and passionate about handling all inquiries with attention to your unique needs.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact2-maincontact">
                                                    
                                                    <ContactForm />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-padding">
                                                    <div className="contact2-auhtor-section contacrtblogbg">
                                                        <div className="clock-area">
                                                            <img src="assets/images/icons/clock1.svg" alt="" />
                                                        </div>
                                                        <div className="contact-location">
                                                            <h1 className="font-20 font-lora lineh-24 color-29 weight-600 margin-b">Contact us</h1>
                                                            <p className="font-ks font-16 lineh-26 color-30 weight-500 ">
                                                            5 South Charlotte Street, Edinburgh, EH2 4AN
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-padding margin-t">
                                                    <div className="contact2-auhtor-section contacblogbg contacrtblogbg">
                                                        <div className="clock-area">
                                                            <img src="assets/images/icons/phone4.svg" alt="" />
                                                        </div>
                                                        <div className="contact-location">
                                                            <h1 className="font-20 font-lora lineh-24 color weight-600 margin-b">Call or text</h1>
                                                            <p className="font-ks font-16 lineh-26 color weight-400 ">
                                                                <a href="tel:03301130272 " className="color-ks1">
                                                                0330 1130272 
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-padding margin-t ">
                                                    <div className="contact2-auhtor-section contacrtblogbg">
                                                        <div className="clock-area">
                                                            <img src="assets/images/icons/email3.svg" alt="" />
                                                        </div>
                                                        <div className="contact-location">
                                                            <h1 className="font-20 font-lora lineh-24 color-29 weight-600 margin-b">Email us today</h1>
                                                            <p className="font-ks font-16 lineh-26 color-30 weight-400 ">
                                                                <a href="mailto:info@unitech-consultancy.co.uk" className="color-17">
                                                                info@unitech-consultancy.co.uk
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 margin-t60">
                                    <div className="map-section-area">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=1598&amp;height=673&amp;hl=en&amp;q=5 S Charlotte St&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT  END=======*/}
                    
                </div>
            </Layout>
        </>
    );
}
