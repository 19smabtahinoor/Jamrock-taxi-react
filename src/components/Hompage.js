import React from 'react'
import TopSection from './TopSection'
import ServiceWorks from './ServiceWorks'
import Fleet from './Fleet'
import Faq from './Faq'
import EmailSubscribe from './EmailSubscribe'
import Advantages from './Advantages'
import Footer from './Footer'

const Hompage = () => {
    return (
        <>
            <main>
                <TopSection/>
                <ServiceWorks/>
                <Fleet/>
                <Faq/>
                <EmailSubscribe/>
                <Advantages/>
                <Footer/>
            </main>
        </>
    )
}

export default Hompage
