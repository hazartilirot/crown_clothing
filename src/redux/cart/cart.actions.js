import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = cartItem => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem
})

export const clearItemFromCart = cartItem => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem
})
export const increaseQuantityInCart = cartItem => ({
  type: CartActionTypes.INCREASE_QUANTITY_IN_CART,
  payload: cartItem
})
export const decreaseQuantityInCart = cartItem => ({
  type: CartActionTypes.DECREASE_QUANTITY_IN_CART,
  payload: cartItem  
})
export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})