import CartActionTypes from './cart.types';

import { 
  addItemToCart,
  clearItemFromCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
} from "./cart.utilsjs";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {...state, hidden: !state.hidden}
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state, 
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.INCREASE_QUANTITY_IN_CART:
      return {
        ...state,
        cartItems: increaseQuantityInCart(state.cartItems, action.payload)
      }
    case CartActionTypes.DECREASE_QUANTITY_IN_CART:
      return {
        ...state,
        cartItems: decreaseQuantityInCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}
export default cartReducer;