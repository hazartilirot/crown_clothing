export const addItemToCart = (cartItems, addItemToCart) => {
  const existingCartItem = cartItems.find(i => i.id === addItemToCart.id)
  
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === addItemToCart.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
  }
  return [...cartItems, {...addItemToCart, quantity: 1}]
}
