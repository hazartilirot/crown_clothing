import React from 'react';

import './checkout-item.styles.scss'

import {connect} from 'react-redux';

import {
  clearItemFromCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,  
} from '../../redux/cart/cart.actions'

const CheckoutItem = (
    {
      cartItem, 
      clearItemFromCart, 
      increaseQuantityInCart,
      decreaseQuantityInCart,
    }
  ) => {
  
  const {name, imageUrl, price, quantity} = cartItem;
  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <div className="checkout-image" 
           style={{backgroundImage: `url(${imageUrl})`}} 
        />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" 
             onClick={() => decreaseQuantityInCart(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" 
           onClick={() => increaseQuantityInCart(cartItem)}>&#10095;</div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button"
         onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  increaseQuantityInCart: item => dispatch(increaseQuantityInCart(item)),
  decreaseQuantityInCart: item => dispatch(decreaseQuantityInCart(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);