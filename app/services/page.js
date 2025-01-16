
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Services">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h1 className="font-48 font-lora weight-600 color-29 lineh-56">We Offer Best Services</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/quality">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Quality and Performance Engineering</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/quality" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/service1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/digital">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Digital Transformation</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/digital" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/service2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/ai">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Artificial Intelligence</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/ai" className="font-nunito font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/service3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/cloud">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Cloud Services</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/cloud" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/service4.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCEV2 END=======*/}
                   
                </div>

            </Layout>
        </>
    )
}