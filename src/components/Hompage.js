import React from 'react'
import TopSection from './TopSection'
import ServiceWorks from './ServiceWorks'
import Reviews from './Reviews'
import Partners from './Partners'
import Fleet from './Fleet'
import Faq from './Faq'
import EmailSubscribe from './EmailSubscribe'
import Advantages from './Advantages'
import Countries from './Countries'
import Footer from './Footer'

const Hompage = () => {
    return (
        <>
            <main>
                <TopSection/>
                <ServiceWorks/>
                <Reviews/>
                <Partners/>
                <Fleet/>
                <Faq/>
                <EmailSubscribe/>
                <Advantages/>
                <Countries/>
                <Footer/>
            </main>
        </>
    )
}

export default Hompage
