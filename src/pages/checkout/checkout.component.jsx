import React from 'react';

import './checkout.styles.scss'

import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

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
          cartItems.map(ci => <CheckoutItem key={ci.id} cartItem={ci} />)
        }
        <div className="total">
          <span>TOTAL: {currency}{cartTotal}</span>
        </div>
      </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);