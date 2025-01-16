
import Link from "next/link"

export default function Service8() {
    return (
        <>

            <div className="service7-section-area section-padding5">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service7-textarea text-center margin-b60">
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Services we offer</h1>
                                <p>At UNITECH, we have various IT services to meet your business needs</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                            <div className="service3-boxarea margin-b30">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="service3-text2">
                                            <Link href="/digital">
                                                <h1 className="font-lora font-22 lineh-24 color-h7 weight-600 margin-b">Digital Transformation</h1>
                                            </Link>
                                            <p className="font-ks font-16 lineh-26 weight-500 color-hp">Our team specializes in helping businesses transition to the digital era. We implement solutions that transform operations and improve efficiency.</p>
                                            <Link href="/digital" className="font-ks font-16 lineh-16 color-ks1 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <div className="service3-imag1">
                                            <img src="/assets/images/service2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1600}>
                            <div className="service3-boxarea margin-b30">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="service3-text2">
                                            <Link href="/cloud">
                                                <h1 className="font-lora font-22 lineh-24 color-h7 weight-600 margin-b">Cloud Services</h1>
                                            </Link>
                                            <p className="font-ks font-16 lineh-26 weight-500 color-hp">We offer secure and scalable cloud-based solutions to support your business operations and ensure seamless integration.</p>
                                            <Link href="/cloud" className="font-ks font-16 lineh-16 color-ks1 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="service3-imag1">
                                            <img src="/assets/images/service4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1400}>
                            <div className="service3-boxarea margin-b30">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="service3-text2">
                                            <Link href="/ai">
                                                <h1 className="font-lora font-22 lineh-24 color-h7 weight-600 margin-b">Artificial Intelligence (AI)</h1>
                                            </Link>
                                            <p className="font-ks font-16 lineh-26 weight-500 color-hp">Leverage the power of AI to gain insights and improve decision-making. Our AI solutions are customized to meet specific business needs.</p>
                                            <Link href="/ai" className="font-ks font-16 lineh-16 color-ks1 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="service3-imag1">
                                            <img src="/assets/images/service3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                            <div className="service3-boxarea margin-b30">
                                <div className="row">
                                    <div className="col-lg-7 ">
                                        <div className="service3-text2">
                                            <Link href="/quality">
                                                <h1 className="font-lora font-22 lineh-24 color-h7 weight-600 margin-b">Quality and Performance Engineering</h1>
                                            </Link>
                                            <p className="font-ks font-16 lineh-26 weight-500 color-hp">Our primary goal is to maintain the highest quality standards for each project. Our certified experts enable you to achieve superior performance in your IT systems.</p>
                                            <Link href="/quality" className="font-ks font-16 lineh-16 color-ks1 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="service3-imag1">
                                            <img src="/assets/images/service1.png" alt="" />
                                        </div>
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
