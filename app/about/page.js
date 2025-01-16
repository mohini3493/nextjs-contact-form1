import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="About US">
                <div>
                    {/*===== ABOUT STARTS=======*/}
                    <div className="about3-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about3-images1">
                                        <img src="/assets/images/a1.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About UNITECH</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Empowering Businesses with Technology! </h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30  justifytxt margin-b">Incorporated in 2022 by enthusiastic industry experts, UNITECH has emerged as one of the fastest-growing technology services companies. We specialize in comprehensive IT solutions tailored to the diverse needs of businesses across industries.</p>

                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 justifytxt">We focus on delivering transformative projects, especially in the financial services sector. We can handle everything from cloud-based products to seamless migrations and complex technological transformations. We believe at UNITECH that creating lasting partnerships with our clients is about offering solutions that drive success and growth.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">Multiple Locations <br />
                                                            We Are Available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={25} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">Years of Experiences <br />To Run This Company</p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT END=======*/}
                    {/*===== LAW PROVIDE STARTS =======*/}
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="lawprovide-textarea">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Empowering your digital transformation</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Who We Are? </h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30 justifytxt margin-b">UNITECH was founded based on innovation, collaboration, and expertise. Our Managing Director, Praveen Kumar Jatling, has over 12 years of rich experience in the IT sector. His career highlights include managing large-scale programs, overseeing technical integrations, and leading data and API migrations.</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30 justifytxt margin-b">Praveen's experience includes vast experience in the health, transportation, and billing industries. His expertise in identifying opportunities, defining the product strategy, and leading teams put UNITECH in a position to be on top of technological trends.</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30 justifytxt">Pride is taken in our ability to understand complex business challenges with tailored IT solutions that break expectations.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-images1">
                                        <img src="/assets/images/a2.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== LAW PROVIDE END=======*/}
                    {/*===== MISSION STARTS=======*/}
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/a11.jpg" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Vision</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b justifytxt">We aspire to be our clients' trusted partners in their digital transformation journey. In this direction, we wish to provide world-class software development services to our clients by connecting them with the industry's best talent. At an internal level, we strive to create a culture of learning, innovation, and collaboration for our team.</p>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b justifytxt">Our mission at UNITECH is to create value for our clients by using technology to fuel their business growth. Equally important is fostering an environment that encourages personal and professional development for all our team members.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== MISSION END=======*/}
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="lawprovide-textarea text-center margin-b30">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Values</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">Our values underpin everything we do</p>
                                        
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="lawprovide-boaxrea margin-b30">
                                            <div className="guidiance-boxarea">
                                                <img src="/assets/images/people.png" alt="" className="ts" />
                                            </div>
                                            <div className="lax-conultingprovide">
                                                <Link href="/servicemiddle" className="color-29">
                                                    <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">People</h1>
                                                </Link>
                                                <p className="font-ks lineh-26 weight-500 color-30 font-16 ts justifytxt">We put people first. We are committed to delivering an environment of respect where everyone feels valued, honored, and respected at all levels.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4">
                                        <div className="lawprovide-boaxrea margin-b30">
                                            <div className="guidiance-boxarea">
                                                <img src="/assets/images/rating.png" alt="" className="ts" />
                                            </div>
                                            <div className="lax-conultingprovide">
                                                <Link href="/servicemiddle" className="color-29">
                                                    <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Expertise</h1>
                                                </Link>
                                                <p className="font-ks lineh-26 weight-500 color-30 font-16 ts justifytxt">We are passionate about technology. We use our technical know-how to tackle some of the most challenging issues and continuously learn and share our knowledge with our clients, colleagues, and partners.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="lawprovide-boaxrea">
                                            <div className="guidiance-boxarea">
                                                <img src="/assets/images/collaborate.png" alt="" className="ts" />
                                            </div>
                                            <div className="lax-conultingprovide">
                                                <Link href="/servicemiddle" className="color-29">
                                                    <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Integrity</h1>
                                                </Link>
                                                <p className="font-ks lineh-26 weight-500 color-30 font-16 ts justifytxt">Integrity is the bedrock of our business. We are dedicated to ethical standards, building trust, and promoting transparency in all our engagements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                   
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/a12.jpg" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Why UNITECH?</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">UNITECH is more than a technology services company, we partner with you for your success. Here is why businesses choose us:</p>

                                        <ul>
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Tailored Solutions:</strong> We know that every business is unique. That is why we offer customized IT solutions to meet your specific needs.</li>  
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Experienced Team:</strong> Our UK-based team is well established in delivering superb results to clients of every size - from startups to multinational organizations.</li> 
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Focus on Quality: </strong> Delivering high-quality services on time, within budget, and quality is very important to us.</li> 
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Collaborative Approach:</strong> Work closely with the clients by understanding their goals and implementing the proper solutions.</li> 
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Innovation-Driven:</strong> We are always ahead of the curve by creating a culture of continuous learning and innovation.</li>   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mission-area-starts">
                        <div className="container">
                            <div className="row align-items-center">
                                
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">What We Do?</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">We offer a wide range of services to help businesses achieve their technology goals:</p>

                                        <ul>
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Software Development:</strong> Creating scalable, efficient, innovative software solutions.</li>  
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Staffing Services:</strong> Connecting businesses with the right talent to drive success.</li> 
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Professional Services: </strong> Offering expert guidance and support for your digital transformation.</li> 
                                            <li className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20"><span><img src="/assets/images/icons/check1.png" alt="" /></span><strong>Cloud-Based Products:</strong> Development of a sophisticated cloud solution that fulfills the current requirements of the modern business world.</li> 
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/a13.jpg" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="margin-b48"></div>
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="lawprovide-textarea text-center margin-b30">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Commitment </h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">UNITECH feels that success is synonymous with the client's success. We commit ourselves to being a trusted partner to manage your technology projects in the right direction and with great care. You can ask for specific skills or an entire IT solution - we are here to assist you.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                </div>
            </Layout>
        </>
    );
}
