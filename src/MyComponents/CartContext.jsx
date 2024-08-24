import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {

    console.log(item)
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Update the quantity if the item already exists
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // Add the new item with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove items from the cart
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

