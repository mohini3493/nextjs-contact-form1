
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function Client5() {
    return (
        <>

            <div className="client-7section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-12">
                            <div className="tax-consulttext1 text-center">
                                <div className="tax-consult">
                                    <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Solving Business Conflicts with Ease</h1>
                                    <p className="font-16 lineh-26 font-ks weight-500 color-hp text-center">Business disputes are both disruptive and stressful. Our experienced negotiators and litigators are committed to helping you navigate effective ways of dispute resolution, which will result in favorable outcomes while having as little as possible impact on your business and personal lives.
                                    </p>
                                    <div className="div" data-aos="fade-up" data-aos-duration={1400}>
                                        <Link href="/contact" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">Discover
                                            Solution</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}
