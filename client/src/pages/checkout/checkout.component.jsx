import React from 'react';

import './checkout.styles.scss'

import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import StripeCheckout from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, cartTotal, currency="$"}) => {
  return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>product</span>
          </div>
          <div className="header-block">
            <span>description</span>
          </div>
          <div className="header-block">
            <span>quantity</span>
          </div>
          <div className="header-block">
            <span>price</span>
          </div>
          <div className="header-block">
            <span>remove</span>
          </div>
        </div>
        {
          cartItems.map(i => <CheckoutItem key={i.id} cartItem={i} />)
        }
        <div className="total">
          <span>TOTAL: {currency}{cartTotal}</span>
        </div>
        <div className="warning-message">
          * For testing purpose use the card:
          <br/>
          4242 4242 4242 4242 Exp: 01/22 CVV: 123 
        </div>
        <StripeCheckout price={cartTotal} />
      </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);