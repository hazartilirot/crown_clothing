export const addItemToCart = (cartItems, addItemToCart) => {
  const existingCartItem = cartItems.find(i => i.id === addItemToCart.id)
  
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === addItemToCart.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
  }
  return [...cartItems, {...addItemToCart, quantity: 1}]
}

export const clearItemFromCart = (cartItems, deleteItemFromCart) =>
  cartItems.filter(ci => ci.id !== deleteItemFromCart.id)

export const increaseQuantityInCart = 
    (cartItems, increasedCartItem) => {
  return cartItems.map(cartItem => cartItem.id === increasedCartItem.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem)
}
export const decreaseQuantityInCart = 
    (cartItems, decreasedCartItem) => {
  return cartItems.map(cartItem => cartItem.id === decreasedCartItem.id
      ? cartItem.quantity > 1 
          ? {...cartItem, quantity: cartItem.quantity - 1} 
          : cartItem
      : cartItem)
}