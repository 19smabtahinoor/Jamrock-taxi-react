import React,{useState} from 'react'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import EmailSubscribeMobile from './EmailSubscribeMobile'

const EmailSubscribe = () => {
    const [changeEmailBox, setchangeEmailBox] = useState(false)

    const changeHandler = () => {
        if (window.innerWidth <= 768) {
            setchangeEmailBox(true)
        } else {
            setchangeEmailBox(false)
        }
    }
    window.addEventListener('resize', changeHandler)
    return (
        <Wrapper>
            {!changeEmailBox ? 
            <>
                    <section className="email__subscribe">
                        <div className="container px-4 py-12">
                            <Fade left>
                                <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-4xl py-9 font-semibold">Ticket sales, travel guides, <br />and secret discounts in your inbox</h1>
                            </Fade>

                            <Fade left>
                                <div className="input-group mb-3 rounded-5 w-50 mx-auto">
                                    <input type="email" className="form-control py-2" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                                    <button className="btn btn-warning text-light" type="button" id="button-addon2">
                                        Subscribe
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </section>
            </>
            :
            <EmailSubscribeMobile/>
            }
        </Wrapper>
    )
}
const Wrapper = Styled.section`
.email__subscribe{
    background:url('../../assets/subscribe-section.png');
    background-size:cover;
    background-repeat:no-repeat;
    height:auto;
    margin:65px 0px;
    max-width:100%;
}

@media only screen and (max-width:768px){
    .input-group>.form-control, .input-group>.form-select {
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    width:0% !important;

    .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    /* border-bottom-left-radius: 0; */
    width: 100%;
    /* margin: auto; */
    margin-top: 10px;
}
}
}
`

export default EmailSubscribe
