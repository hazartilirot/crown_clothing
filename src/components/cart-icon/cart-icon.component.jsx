import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, counter }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{counter}</span>
    </div>
  );
};

/*/!*The issue with this snippet is that it's executed (re-rendered) each time a
state changes. The data needs to be memoized in memory so that it's rendered
only when the data changes itself despite the state of an app. reselect*!/
const mapStateToProps = ({cart: {cartItems}}) => ({
  counter: cartItems.reduce((acc, itm) => acc + itm.quantity, 0)  
})*/

const mapStateToProps = (state) => ({
  counter: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);