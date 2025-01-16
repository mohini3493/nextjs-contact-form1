
import Link from "next/link"

export default function Cta7() {
    return (
        <>

            <div className="cta7-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta7-textarea">
                                <h1 className="font-lora font-48 lineh-52 weight-500 margin-b">Get in touch with us! </h1>
                                <p className="font-ks font-16 weight-600 lineh-26 margin-b">We are always open to new projects! Let's help you reach your IT goals.</p>
                                <p className="font-ks font-16 weight-400 lineh-26 justifytxt">UNITECH offers tailored IT solutions to help companies thrive. Let us change the game for your business together and work towards achieving your objectives.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-4">
                            <div className="cta7-btnarea">
                                <Link href="/contact" className=" font-ks font-16 weight-700 color-ks1 lineh-16 contactbtn8">Contact
                                    Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
