import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartitem, setcartitem] = useState([]);

  const addToCart = (item) => {
    // const itemexist = cartitem.find(cartitem => cartitem.id === item.id);
    // console.log(itemexist + "bhavya")
    const itemexist = cartitem.find(cartitem => cartitem.id === item.id);
    console.log(itemexist + "bhavya");

    if (itemexist) {

      const updatedItems = cartitem.map(cartitem =>
        cartitem.id === item.id ? { ...cartitem, quantity: cartitem.quantity + 1 } : cartitem
      );

      setcartitem(updatedItems);
    } else {

      setcartitem([...cartitem, { ...item, quantity: 1 }]);
    }
    // setcartitem([...cartitem, { ...item, quantity: 1 }]);
    // console.log(item);
  };

  const removeItem = (itemId) => {
    const updateditems = cartitem.filter(item => item.id !== itemId);
    setcartitem(updateditems);
  };

  return (
    <CartContext.Provider value={{ cartitem, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}





