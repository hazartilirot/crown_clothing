import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item.component";

import {selectCartItems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
}
/*const mapStateToProps = ({ cart: {cartItems}}) => ({cartItems})*/
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);