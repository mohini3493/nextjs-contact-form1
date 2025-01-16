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
            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Quality and Performance Engineering">
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
                                        <img src="/assets/images/q1.jpg" alt="" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Quality and Performance Engineering</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Accelerate Change with Reliable and High-Performance Solutions</strong></p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">In a world driven by digital transformation, quality assurance is more than a necessity it’s a strategic advantage. At Unitech, we provide end-to-end Quality and Performance Engineering services that ensure your business operates at peak efficiency. By leveraging advanced methodologies and automation, we help you accelerate change without compromising on quality, empowering your organization to thrive in a competitive landscape.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Quality and Performance Engineering Matters?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">As businesses adapt to evolving market demands, maintaining quality and performance is critical for long-term success. Our solutions ensure that your systems, applications, and processes are optimized for:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Reliability:</strong> <br /> Deliver consistent, error-free performance every time.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Speed: </strong> <br /> Deploy updates and features faster without sacrificing quality.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Customer Satisfaction: </strong> <br /> Provide seamless experiences that build trust and loyalty.</p>
                                            </li>
                                        </ul>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">At Unitech, we help you meet these objectives through a blend of cutting-edge technology and deep expertise.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Our Approach to Quality and Performance Engineering</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="accordionExample">
                                                
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Seamless Transformation</button>
                                                    </h2>
                                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Digital transformation requires a careful balance between innovation and reliability. Our engineering solutions streamline your operations, making the transition to new systems smooth and risk-free. We ensure that your business is future-ready while delivering measurable improvements in performance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Advanced QA Methodologies</button>
                                                    </h2>
                                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Quality assurance is at the heart of what we do. Our QA experts use advanced testing frameworks, automated tools, and industry best practices to identify and resolve issues before they impact your business. Whether it’s functional testing, performance testing, or security testing, we’ve got you covered.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Risk Reduction</button>
                                                    </h2>
                                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Change often comes with uncertainty, but it doesn’t have to. Our proactive risk management strategies identify potential challenges early, ensuring your systems remain resilient and secure throughout the transformation process.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Key Features of Our Services</h2>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Comprehensive Testing</strong> <br /> From usability to performance and security, we offer a wide range of testing services tailored to your unique needs. Our automated testing tools deliver faster results while maintaining accuracy and reliability.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Real-Time Insights</strong> <br /> Gain actionable insights into your systems’ performance with our advanced analytics dashboards. Monitor, measure, and optimize your processes in real time, ensuring peak performance at all times.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Scalable Solutions</strong> <br /> Our services grow with your business. Whether you’re scaling up to meet increased demand or integrating new technologies, we ensure your systems can handle the change seamlessly.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Custom Strategies</strong> <br /> Every business is different. That’s why we develop customized quality and performance engineering strategies that align with your goals, challenges, and industry requirements.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Industries We Serve</h2>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Our Quality and Performance Engineering solutions are designed to meet the needs of diverse industries, including:</p>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Technology</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Deliver cutting-edge software and applications with confidence.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/qq1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Retail</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Ensure seamless online shopping experiences with optimized e-commerce platforms.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/qq2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Finance</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Protect sensitive data and streamline transaction processes.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/qq3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Healthcare</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Enhance the reliability of critical medical systems and applications.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/qq4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Whatever your industry, Unitech provides the tools and expertise needed to achieve excellence.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Choose Unitech?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">At Unitech, we’re committed to helping businesses succeed through quality and performance. Here’s why our clients trust us:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Expert Team:</strong> <br /> Our engineers bring years of experience and deep technical knowledge to every project.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Cutting-Edge Tools: </strong> <br /> We use the latest technologies and frameworks to deliver unmatched results.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Proven Processes:</strong> <br /> Our methodologies are designed to ensure consistency, efficiency, and reliability.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">End-to-End Support:</strong> <br /> From initial assessment to post-implementation monitoring, we’re with you every step of the way.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Ready to Elevate Your Business?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Quality and performance are the foundation of success in today’s digital world. With Unitech, you can confidently embrace transformation while ensuring your systems are robust, reliable, and ready for the future.</p>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Request a Callback Today!</h2>                                    
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Got questions? Let’s chat. Our experts are here to discuss your challenges, provide insights, and guide you toward tailored solutions. Simply fill out our form, and we’ll get in touch promptly.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Drive Rapid Transformation with Unitech</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Your business deserves the best. With Unitech’s Quality and Performance Engineering solutions, you can:</p>
                                   
                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Deliver faster, more reliable results.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Enhance customer satisfaction.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> Stay ahead in a competitive, digital-first world.</p>
                                            </li>
                                        </ul>
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