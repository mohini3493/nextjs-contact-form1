import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
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
            <div className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/index1"><img src="/assets/images/logo/logo11.png" alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logoicons-area">
                    <div className="logos">
                        <img src="/assets/images/logo/logo11.png" alt="" />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li><Link href="/" className="font-ks font-16 weight-500 color">Home </Link></li>
                        <li><Link href="/about" className="font-ks font-16 weight-500 color">About Us</Link></li>
                        <li className="has-sub hash-has-sub">
                            <span className={isActive.key == 1 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(1)}><em /></span>
                            <Link href="#" className="font-ks font-16 weight-500 color">Services</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                <li><Link href="/digital" className="font-ks font-16 weight-500 color-1">Digital Transformation</Link></li>
                                <li><Link href="/cloud" className="font-ks font-16 weight-500 color-1">Cloud Services</Link></li>
                                <li><Link href="/ai" className="font-ks font-16 weight-500 color-1">Artificial Intelligence (AI)</Link></li>
                                <li><Link href="/quality" className="font-ks font-16 weight-500 color-1">Quality and Performance Engineering</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#" className="font-ks font-16 weight-500 color"> Products </Link></li>
                        <li><Link href="/career" className="font-ks font-16 weight-500 color"> Career</Link></li>
                        <li><Link href="/blog" className="font-ks font-16 weight-500 color"> Blog </Link></li>
                        <li><Link href="/contact" className="font-ks font-16 weight-500 color"> Contact</Link></li>
                    </ul>
                    <div className="allmobilesection">
                        <Link href="/contact" className="font-ks font-18 lineh-18 weight-700 color-ks1 mobilemenubtn">Get Started</Link>
                        <div className="single-footer single-footer-menu single-footer4">
                            <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Contact Info</h3>
                            <div className="footer4-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/phone5.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/tel:03301130272" className="font-ks font-16 lineh-26 weight-500 color-21">03301130272</Link>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/email4.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/mailto:info@unitech-consultancy.co.uk" className="font-ks font-16 lineh-26 weight-500 color-21">info@unitech-consultancy.co.uk</Link>
                                    </div>
                                </div>
                                <div className="single-footer single-footer-menu single-footer4">
                                    <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Our Location</h3>
                                    <div className="contact-info-single">
                                        <div className="contact-info-icon">
                                            <img src="/assets/images/icons/location2.png" alt="" />
                                        </div>
                                        <div className="contact-info-text">
                                            <Link href="#" className="font-ks font-16 lineh-26 weight-500 color-21">5 South Charlotte Street, Edinburgh, EH2 4AN</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-footer single-footer-menu single-footer4">
                                    <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Social Links</h3>
                                    <div className="social social4-menu social4">
                                        <ul>
                                            <li>
                                                <Link data-bs-toggle="tooltip" title="Facebook" href="#"><svg className="svg-inline--fa fa-linkedin-in" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z">
                                                    </path>
                                                </svg>{/* <i class="fa-brands fa-linkedin-in"></i> Font Awesome fontawesome.com */}</Link>
                                            </li>
                                        </ul>
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
