export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToClear.id
  );

  if (existingItem) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
  }

  return [...cartItems];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }else{
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
