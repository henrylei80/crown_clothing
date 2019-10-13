export const addItemToCart = (cartItems, CartItemToAdd) => {
  const existingCaritem = cartItems.find(
    cartItem => cartItem.id === CartItemToAdd.id
  )

  if (existingCaritem){
    return cartItems.map(cartItem =>
    cartItem.id === CartItemToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }
  return [...cartItems, {...CartItemToAdd, quantity: 1}]
};
