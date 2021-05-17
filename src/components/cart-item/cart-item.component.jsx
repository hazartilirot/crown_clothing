import React from 'react';

import './cart-item.styles.scss'

const CartItem = ({item: { imageUrl, name, price, quantity, currency="$"}}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="clothing item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x {currency}{price}</span>
      </div>
    </div>
  );
}
export default CartItem;