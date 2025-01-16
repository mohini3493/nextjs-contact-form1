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

            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Cloud Services">
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
                                        <img src="/assets/images/c1.jpg" alt="" />
                                        <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">Cloud Services</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Flexible, Scalable, and Secure Solutions for a Future-Ready Business</strong></p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">In today’s fast-paced digital landscape, businesses need the agility to adapt and the technology to thrive. At Unitech, our Cloud Services provide innovative solutions that enable seamless scaling, enhanced collaboration, and robust data security. Whether you’re looking to modernize your infrastructure, improve operational efficiency, or strengthen your data protection, our cloud solutions are designed to keep your business competitive and future-ready.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Move to the Cloud?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Cloud computing is more than a trend; it’s a strategic advantage for businesses across industries. By embracing cloud solutions, you can:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Scale Seamlessly:</strong> <br /> Adapt to changing business demands without interruptions.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Enhance Collaboration: </strong> <br /> Enable real-time teamwork across global teams with cloud-based tools.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Ensure Business Continuity: </strong> <br /> Protect your operations from disruptions with secure backups and disaster recovery options.</p>
                                            </li>
                                        </ul>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Unitech’s tailored cloud solutions empower businesses to achieve these goals, providing a solid foundation for growth and innovation.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Our Cloud Services Approach</h2>

                                        <div className="accordian-area accourbutton">
                                            <div className="accordion accordian4" id="accordionExample">
                                                
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Flexible and Scalable Solutions</button>
                                                    </h2>
                                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-22 ">We design cloud solutions that align with your current needs while accommodating future growth. Whether you’re scaling up to meet increased demand or streamlining processes, our solutions adapt effortlessly.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Enhanced Collaboration</button>
                                                    </h2>
                                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Unitech’s cloud platforms enable seamless communication and teamwork. From file sharing to project management, your team can work together in real time, no matter where they are.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Robust Data Security</button>
                                                    </h2>
                                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Security is at the core of our cloud services. We employ advanced encryption, multi-factor authentication, and regular compliance checks to ensure your data is protected at every stage.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item m-0 borderlefts">
                                                    <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Cost Optimization</button>
                                                    </h2>
                                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Optimize operational costs with pay-as-you-go models and reduced hardware expenses. Our cloud solutions help you allocate resources effectively, ensuring you only pay for what you use.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Key Features of Our Cloud Services</h2>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Business Continuity</strong> <br /> Protect your business from downtime with reliable backups, disaster recovery, and failover solutions.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Faster Time to Market</strong> <br /> Accelerate deployment of new applications and services with cloud infrastructure that supports rapid innovation.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Future-Ready Infrastructure</strong> <br /> Stay ahead with a scalable, flexible, and modern cloud setup designed to support emerging technologies like AI and IoT.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Real-Time Insights</strong> <br /> Leverage cloud-based analytics tools to gain actionable insights and drive smarter business decisions.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Industries We Serve</h2>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">Unitech’s Cloud Services cater to diverse industries, including:</p>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Retail</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Optimize inventory, enhance customer experiences, and drive e-commerce growth.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/cc1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Healthcare</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Store and access patient data securely while streamlining operations.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/cc2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Finance</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Ensure secure transactions and scalable data processing for real-time financial insights.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/cc3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service3-boxarea margin-b30 bgservice2">
                                            <div className="row">
                                                <div className="col-lg-6 ">
                                                    <div className="service3-text2">
                                                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Manufacturing</h1>
                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Enable smart automation and efficient supply chain management with cloud-based tools.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service3-imag1">
                                                        <img src="/assets/images/cc4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">No matter your industry, our cloud expertise ensures solutions that meet your specific needs and challenges.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Why Unitech?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">When you partner with Unitech, you gain access to:</p>

                                        <ul>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Expert Guidance:</strong> <br /> Our team of cloud specialists ensures a smooth transition to the cloud.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Cutting-Edge Technology: </strong> <br /> We utilize the latest tools and platforms for unmatched reliability and performance.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">End-to-End Support:</strong> <br /> From migration planning to ongoing optimization, we’re with you every step of the way.</p>
                                            </li>
                                            <li className="checkservice-area margin-b20">
                                                <p className="font-ks font-16 lineh-26 weight-500 color-30"><span><img src="/assets/images/icons/check1.png" alt="" /></span> <strong className="color-29">Proven Results:</strong> <br /> Our solutions are designed to deliver measurable outcomes that drive growth and efficiency.</p>
                                            </li>
                                        </ul>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Ready to Unlock the Power of the Cloud?</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Cloud computing isn’t just a technology upgrade—it’s a business transformation. With Unitech’s Cloud Services, you’ll gain the flexibility, scalability, and security you need to adapt and thrive in today’s digital world.</p>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Have Questions? Let’s Talk!</h2>                                    
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">Request a callback today to discuss how our cloud solutions can transform your business. Our experts are ready to answer your questions, provide insights, and design a custom strategy tailored to your goals.</p>

                                        <div class="border30"></div>

                                        <h2 className="font-lora font-30 lineh-50 weight-600 color-29 margin-b20 margin-t28">Unleash the Potential of Cloud Computing</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20 justifytxt">At Unitech, we don’t just implement cloud solutions—we create opportunities for growth, efficiency, and innovation. Let us help you modernize your operations and build a stronger, future-ready business.</p>
                                   
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><strong>Contact Us Today</strong> to take the first step toward a more agile, collaborative, and secure future with cloud technology.</p>
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