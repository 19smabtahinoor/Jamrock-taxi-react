import React from 'react'
import TopSection from './TopSection'
import CarsCart from './CarsCart.js'
import ServiceWorks from '../ServiceWorks'
import Faq from '../Faq'
import EmailSubscribe from '../EmailSubscribe'
import Advantages from '../Advantages'
import Footer from '../Footer'

const SearchPage = () => {
    return (
        <>
            <main>
                <TopSection/>
                <CarsCart/>
                <ServiceWorks />
                <Faq />
                <EmailSubscribe />
                <Advantages />
                <Footer />
            </main>
        </>
    )
}

export default SearchPage
