import Link from "next/link"


export default function Header7({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header header-sticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/logo10.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex  homepage7 ">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color">Home</Link>
                                            </li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color">About Us</Link></li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color">Services <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/digital" className="font-ks font-16 weight-500 color">Digital Transformation</Link></li>
                                                    <li><Link href="/cloud" className="font-ks font-16 weight-500 color">Cloud Services</Link></li>
                                                    <li><Link href="/ai" className="font-ks font-16 weight-500 color">Artificial Intelligence (AI)</Link></li>
                                                    <li><Link href="/quality" className="font-ks font-16 weight-500 color">Quality and Performance Engineering</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color"> Products </Link></li>
                                            <li><Link href="/career" className="font-ks font-16 weight-500 color"> Career</Link></li>
                                            <li><Link href="/blog" className="font-ks font-16 weight-500 color"> Blog </Link></li>
                                            <li><Link href="/contact" className="font-ks font-16 weight-500 color"> Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="shecdule-btn1">
                                            <Link href="tel:03301130272" className="font-ks font-16 lineh-16 color weight-700 shedule-btn3">Call 0330 1130272</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
