import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
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