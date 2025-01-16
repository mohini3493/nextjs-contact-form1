
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function About10() {
    return (
        <>

            <div className="about10-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about10-images">
                                <img src="/assets/images/2150038860.jpg" alt="" />
                                <div className="experiance-area" data-aos="fade-left" data-aos-duration={1200}>
                                    <h1 className="font-44 font-lora weight-600 color margin-b10"><CounterUp count={15} />
                                    </h1>
                                    <p className="font-ks lineh-16 font-16 weight-500 color">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about10-textarea" data-aos="fade-right" data-aos-duration={1000}>
                            <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Our Career</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24" data-aos="fade-right" data-aos-duration={1200}>Career Consulting Strategy Starts Here</h1>
                                <p className="font-ks lineh-26 weight-500 color-p10 font-16 margin-b30">Your success is our priority. We work collaboratively, providing ongoing support to ensure your long-term growth With years of experience in success consulting.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="about10list">
                                            <ul>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block margin-b">
                                                    <span><i className="fa-solid fa-check" /></span> Morem ipsum dolor sittemet</li>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16"><span><i className="fa-solid fa-check" /></span> Morem ipsum dolor sittemet</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="about10list">
                                            <ul>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block margin-b">
                                                    <span><i className="fa-solid fa-check" /></span> Morem ipsum dolor sittemet</li>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block"><span><i className="fa-solid fa-check" /></span>Morem ipsum dolor sittemet</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="divarea" data-aos="fade-up" data-aos-duration={1200}>
                                        <Link href="/contact2" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts">Learn
                                            more </Link>
                                        <div>
                                            <div className="callicon ts">
                                                <div className="textcall-icon ts">
                                                    <img src="/assets/images/icons/callicon.svg" alt="" className="ts" />
                                                </div>
                                                <div className="textcall ts">
                                                    <p className="font-14 weight-500 color-p10 font-ks margin-b12 ts">Call Us Now
                                                    </p>
                                                    <Link href="/tel:03301130272" className="font-16 lineh-16 weight-700 colorhp3 ts">0330 1130272</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
