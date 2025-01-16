
import Link from "next/link"

export default function Welcome7() {
    return (
        <>

            <div className="welcome7-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="welcome7-textarea">
                                <span className="font-ks font-16 lineh-16 weight-500 color margin-b24">UNITECH</span>
                                <h1 className=" font-lora font-60 lineh-64 weight-500 color-1 margin-b20" data-aos="fade-right" data-aos-duration={1000}>Prominent IT services and staffing enterprise</h1>
                                <p className="font-16 font-ks lineh-26 weight-400 color-1">UNITECH offers customized IT solutions that assist businesses in achieving their objectives.</p>
                                <div className="homepage7all-btn margin-t32">
                                    <Link href="/contact2" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1200}>
                            <div className="welcome2-images-area">
                                <div className="welcome-imgs-area">
                                    <div className="main-img">
                                        <img src="/assets/images/welcome-img-2.png" alt="" className="main-imgs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
