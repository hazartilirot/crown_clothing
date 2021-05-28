import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceInCents,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment')
    })
  }
  
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      amount={priceInCents}
      shippingAddress
      billingAddress
      panelLabel="Pay Now"
      label="Pay Now"
      name="CROWN Clothing"
      image="http://svgshare.com/i/CUz.svg" 
      description={`your total $${price}`}
    />
  );
}
export default StripeCheckoutButton;