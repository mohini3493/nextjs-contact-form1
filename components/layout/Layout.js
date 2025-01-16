
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer7 from './footer/Footer7'
import Header7 from './header/Header7'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    useEffect(() => {
        // const WOW = require('wowjs')
        // window.wow = new WOW.WOW({
        //     live: false
        // })
        // window.wow.init()
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            {!headerStyle && <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 7 ? <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            <MobileMenu  isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu}/>


            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {children}

            {!footerStyle && < Footer7 />}
            {footerStyle == 7 ? < Footer7 /> : null}

            <BackToTop />
        </>
    )
}
