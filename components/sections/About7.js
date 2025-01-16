
import Link from "next/link"

export default function About7() {
    return (
        <>

            <div className="about7-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="about7-images">
                                <img src="/assets/images/about7-img1.png" alt="" className="about7images" />
                                <img src="/assets/images/elementor/elementor44.png" alt="" className="elementors10 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1400}>
                            <div className="about-7textarea">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">UNITECH - Comprehensive IT Solutions</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20" data-aos="fade-left" data-aos-duration={1200}>Empowering Businesses Through Seamless IT Transformations</h1>                                
                                <p className="font-ks font-16 weight-500 color-hp lineh-26 margin-t28 justifytxt">At UNITECH, we are committed to providing unique IT solutions tailored to the needs of diverse businesses across industries. Our core expertise lies in executing change programs within financial services, particularly in banking platforms, payments, migrations, and technology. By offering an expanding portfolio of cloud solutions, we empower businesses to address the challenges of digital transformation effectively and meaningfully. We are dedicated to fostering long-term relationships and supporting businesses in adapting to the ever-evolving technological landscape.</p>
                                <div data-aos="fade-up" data-aos-duration={1400}>
                                    <Link href="/about" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">More About
                                        Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
