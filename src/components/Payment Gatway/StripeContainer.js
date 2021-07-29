import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_live_J0gkAWFRO4yNALAEPKUXR0RO00tGV8Wpka"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
