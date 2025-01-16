'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Artificial Intelligence (AI)">
                <div>
                    <div className="serviceleft-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 hideonmobile">
                                    <div className="serviceour-area">
                                        <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b24">Our Services</h1>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="/digital" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Digital Transformation</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="/cloud" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Cloud Services</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="/ai" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Artificial Intelligence (AI)</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                        <div className="singlepalnning-area margin-b20">
                                            <Link href="/quality" className="font-18 font-ks lineh-18 weight-600 color-29 ts">Quality and Performance Engineering</Link>
                                            <span><i className="fa-solid fa-angle-right ts" /></span>
                                        </div>
                                    </div>
                                    <div className="needed-section">
                                        <h1 className="font-lora font-24 lineh-30 weight-600 color-29 margin-b24">If You Need Any Help
                                            Contact With Us</h1>
                                        <Link href="tel:03301130272" className="font-16 weight-700 color fon-ks lineh-16"><img src="/assets/images/icons/phone9.svg" alt="" />03301130272</Link>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="serviceauthior-area">
                                        <img src="/assets/images/a1.jpg" alt="" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Artificial Intelligence (AI)</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Transform Your Business with Smarter, Faster, and More Efficient Solutions</strong></p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">In a rapidly evolving digital landscape, staying competitive requires leveraging the latest technology. At Unitech, we bring the power of Artificial Intelligence (AI) to your business, helping you unlock innovation, streamline processes, and make smarter decisions. Our AI solutions empower you to stay ahead of the curve, delivering results that drive efficiency, agility, and growth.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Embrace AI?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">AI is no longer a futuristic concept; it’s a tool that can transform the way businesses operate today. By integrating AI into your processes, you can:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Increase Efficiency:</strong> <br /> Automate repetitive tasks, reduce errors, and maximize productivity.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Make Data-Driven Decisions: </strong> <br /> Leverage real-time analytics and predictive insights to make smarter, faster decisions.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Cut Costs: </strong> <br /> Optimize resource allocation and reduce operational expenses with AI-powered tools.</p>
                                            </li>
                                        </ul>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">At Unitech, we help businesses across industries harness the full potential of AI, ensuring they remain competitive and future-ready.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Our Approach to AI</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="accordionExample">
                                                
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Customized AI Solutions</button>
                                                    </h2>
                                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Every business is unique, and so are its challenges. We design tailored AI solutions that align with your specific goals, ensuring maximum impact.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Intelligent Automation</button>
                                                    </h2>
                                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Through machine learning and AI-driven automation, we eliminate inefficiencies in your workflows. Our solutions handle complex tasks with speed and precision, freeing up your team to focus on strategic objectives.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Actionable Insights</button>
                                                    </h2>
                                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">AI thrives on data, and so will your business. Our tools analyze large volumes of data in real time, uncovering trends and patterns that help you make informed decisions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item m-0 borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Future-Ready Scalability</button>
                                                    </h2>
                                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our AI solutions are built to scale as your business grows. Whether you’re expanding your operations or integrating new technologies, we ensure your systems can handle future demands seamlessly.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Key Features of Unitech AI Solutions</h2>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Increased Efficiency</strong> <br /> From automated customer support to predictive maintenance, our AI solutions boost productivity and ensure your business runs smoothly.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Better Decision-Making</strong> <br /> Empower your team with data-driven insights, enabling faster, more accurate decision-making.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Cost Optimization</strong> <br /> AI minimizes wastage, optimizes resource allocation, and streamlines processes, resulting in significant cost savings.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Enhanced Customer Experiences</strong> <br /> Deliver personalized, seamless interactions with AI-powered chatbots, recommendation systems, and more.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Industries We Serve</h2>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Unitech’s AI solutions cater to a wide range of industries:</p>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Retail</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Offer personalized shopping experiences, optimize inventory, and predict trends.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/aa1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Healthcare</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Improve patient outcomes with predictive diagnostics and streamlined workflows.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/aa2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Finance</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Detect fraud, automate reporting, and enhance customer interactions.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/aa3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Manufacturing</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Use AI for predictive maintenance, quality control, and smart automation.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/aa4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">No matter your industry, our AI expertise ensures you stay ahead of the competition.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Choose Unitech?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">When you choose Unitech, you’re partnering with a team that:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Delivers Expertise: </strong> <br /> Our AI specialists have the knowledge and experience to tackle complex challenges.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Utilizes Advanced Tools:</strong> <br /> We employ the latest AI technologies to deliver cutting-edge solutions.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Provides End-to-End Support:</strong> <br /> From strategy to implementation, we’re with you every step of the way.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Focuses on Results:</strong> <br /> Our AI solutions are designed to deliver measurable improvements in efficiency, decision-making, and cost savings.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Take the Leap with AI</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">AI is transforming industries, and your business should be no exception. With Unitech, you can:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Automate tasks and improve efficiency.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Leverage data for smarter decisions.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Deliver exceptional customer experiences.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Reduce costs while boosting productivity.</p>
                                            </li>
                                        </ul>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Have Questions? Request a Callback!</h2>                                    
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Our experts are here to discuss your goals, answer your questions, and design an AI solution tailored to your needs. Simply fill out our form, and we’ll get back to you promptly.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Let Unitech Drive Your AI Transformation</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Artificial Intelligence isn’t just about technology—it’s about unlocking new opportunities. At Unitech, we’re committed to helping businesses like yours embrace AI to stay competitive, agile, and ready for the future.</p>
                                   
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Contact Us Today</strong> and take the first step toward smarter, faster, and more efficient operations with AI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCELEFT END=======*/}
                    
                </div>

            </Layout>
        </>
    )
}