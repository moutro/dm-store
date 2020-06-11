import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51GsgQRCY6heDVn5Fdvi4wSZYsCTof4s7esKjcLbFOCYgkLBZ3rbJ5E4T9wZBkSCweHVpwftCW9DbMHk04IG1lqN3003yCDR6AW";

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }


    return (
      <StripeCheckout
        label="Pay Now"
        name="DM Store"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton
