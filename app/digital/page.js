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
            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Digital Transformation">
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
                                        <img src="/assets/images/d1.jpg" alt="" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Digital Transformation</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Empower Your Business with Innovation and Agility</strong></p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">In an era defined by rapid technological advancements, digital transformation is no longer optional it’s essential. At Unitech, we specialize in driving seamless transformations that modernize your legacy systems, streamline operations, and deliver exceptional customer experiences. With a comprehensive approach and innovative solutions, we help your business adapt, thrive, and grow in a digital-first world.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Choose Digital Transformation?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Digital transformation enables businesses to stay competitive and resilient in today’s fast-paced environment. By leveraging advanced tools and strategies, you can:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Drive Efficiency and Agility:</strong> <br /> Simplify processes, reduce overheads, and respond faster to market changes.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Make Data-Driven Decisions: </strong> <br /> Use actionable insights to fuel smarter strategies and innovations.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Enhance Customer Experiences: </strong> <br /> Deliver personalized, seamless interactions that build loyalty and trust.</p>
                                            </li>
                                        </ul>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">At Unitech, we guide you every step of the way, ensuring your transformation is impactful and secure.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Our Approach to Digital Transformation</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="accordionExample">
                                                
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Seamless Modernization</button>
                                                    </h2>
                                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Modernizing legacy systems is at the core of successful digital transformation. Our team upgrades outdated infrastructures, integrates advanced tools, and ensures compatibility across all platforms to make your operations more agile and efficient.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Automation and Optimization</button>
                                                    </h2>
                                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Through intelligent automation, we streamline repetitive tasks, reduce errors, and free up resources for innovation. Our solutions optimize workflows to maximize productivity and reduce operational costs.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Data-Driven Growth</button>
                                                    </h2>
                                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Harnessing the power of data is key to transformation. We implement advanced analytics and AI-powered tools to give you real-time insights, helping you make informed decisions that drive growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item m-0 borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Risk Mitigation</button>
                                                    </h2>
                                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Transformation comes with challenges, but we help you navigate them confidently. Our robust risk management framework minimizes disruptions and ensures a smooth transition.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Key Benefits of Partnering with Unitech</h2>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Efficiency and Agility</strong> <br /> We enable faster go-to-market strategies, scalable operations, and the ability to adapt to changing business environments seamlessly.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Enhanced Collaboration</strong> <br /> Our solutions promote real-time teamwork, breaking down silos and enabling teams to collaborate more effectively across locations.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Cost-Effective Solutions</strong> <br /> Reduce infrastructure costs and optimize resource allocation with flexible, scalable, and cloud-based solutions tailored to your needs.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Customer-Centric Approach</strong> <br /> We place your customers at the heart of your transformation journey, ensuring every interaction is meaningful, personalized, and seamless.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Industries We Serve</h2>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Unitech’s Digital Transformation solutions cater to various industries, including:</p>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Retail</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Enhance e-commerce platforms, optimize supply chains, and deliver personalized shopping experiences.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/dd1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Healthcare</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Modernize patient management systems and streamline medical workflows.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/dd2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Finance</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Drive faster, more secure transactions while ensuring compliance.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/dd3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Manufacturing</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Implement smart technologies for better production efficiency and quality control.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/dd4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">No matter your industry, Unitech has the expertise to create tailored transformation strategies that align with your goals.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Unitech?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Choosing Unitech means partnering with a team that:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Delivers Proven Expertise:</strong> <br /> Our consultants bring years of experience and cutting-edge knowledge to your projects.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Utilizes Advanced Technology: </strong> <br /> We harness the latest tools and platforms to deliver unmatched results.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Provides End-to-End Support:</strong> <br /> From planning to implementation and beyond, we’re with you at every step.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Guarantees Results:</strong> <br /> Our solutions are designed to deliver measurable outcomes that drive your business forward.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Transform Today for a Better Tomorrow</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">The future is digital, and Unitech is here to make it seamless. With our Digital Transformation solutions, you’ll gain the agility, efficiency, and insights needed to compete and succeed in today’s dynamic landscape.</p>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Let’s Start Your Transformation Journey</h2>                                    
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Ready to transform your business? Request a callback today! Our experts are ready to discuss your needs, answer your questions, and design a solution tailored just for you.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Drive Change with Unitech</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">At Unitech, we don’t just implement change—we make it meaningful and impactful. Empower your business with the tools, strategies, and support you need to thrive in a digital-first world.</p>
                                   
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Contact Us Today</strong> and take the first step toward unlocking the true potential of digital transformation.</p>
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