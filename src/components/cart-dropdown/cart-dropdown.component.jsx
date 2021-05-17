import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
}
export default CartDropdown;