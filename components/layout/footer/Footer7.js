import Cta7 from "@/components/sections/Cta7"
import Link from "next/link"

export default function Footer7() {
    return (
        <>
            <Cta7 />
            <div className="footer4-section-area7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contcat5-section5-area section-padding15">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="contact5-logo5-text">
                                            <img src="/assets/images/logo/logo11.png" alt="" />
                                            <p className="font-ks font-16 weight-500 lineh-26 color32 margin-t margin-b24">Prominent IT services and staffing enterprise, UNITECH offers customized IT solutions that assist businesses in achieving their objectives.</p>
                                            <div className="icon-social-links list7">
                                                <ul>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-linkedin-in" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-5-links">
                                            <h1 className="font-20 font-lora weight-600 lineh-20 color">Quick Links</h1>
                                            <ul>
                                                <li><Link href="/" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Home</Link></li>
                                                <li><Link href="/about" className="font-ks font-16 lineh-16 weight-500 color32 d-inline-block margin-t">About
                                                    Us</Link></li>
                                                <li><Link href="/blog" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Blog</Link></li>
                                                
                                                <li><Link href="/career" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Career</Link>
                                                </li>
                                                <li><Link href="/contact" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="contact-footer heightleft">
                                            <h1 className="font-20 color lineh-20 font-lora margin-b24 weight-600">Contact Us</h1>
                                            <div className="email4">
                                                <img src="/assets/images/icons/email4.svg" alt="" />
                                                <Link href="/mailto:info@unitech-consultancy.co.uk" className="font-16 lineh-24 color32 weight-400 font-ks">info@unitech-consultancy.co.uk</Link>
                                            </div>
                                            <span className="location-fooetr ">
                                                <img src="/assets/images/icons/location2.png" alt="" className="heightwidth" />
                                                <Link href="#" className="font-16 font-ks lineh-24 weight-500 color32 margin-t">5 South Charlotte Street, Edinburgh, EH2 4AN</Link>
                                            </span>
                                            <div className="email4 margin-t">
                                                <img src="/assets/images/icons/phone5.svg" alt="" />
                                                <Link href="/tel:03301130272" className="font-16 lineh-24 color32 weight-400 font-ks">0330 1130272</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-10" />
                            <div className="copyright6 text-center">
                                <p className="font-ks lineh-26 weight-500 font-16 color-21">© Copyright {new Date().getFullYear()} Unitech Consultancy,
                                All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
