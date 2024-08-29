// import React, { createContext, useState } from 'react';

// // Create the context
// export const CartContext = createContext();

// // Create a provider component
// export default function CartProvider ({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add items to the cart
//   const addToCart = (item) => {

//     console.log(item)
//     // const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

//     // if (existingItem) {
//     //   // Update the quantity if the item already exists
//     //   const updatedItems = cartItems.map(cartItem =>
//     //     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     //   );
//     //   setCartItems(updatedItems);
//     // } else {
//     //   // Add the new item with quantity 1
//     //   setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     // }
//   };

//   //  Function to remove items from the cart
//   const removeItem = (itemId) => {
//     const updatedItems = cartItems.filter(item => item.id !== itemId);
//     setCartItems(updatedItems);
//   };

//   return (
//     <CartContext.Provider value={{ addToCart, cartItems}}>
//       {children}
//     </CartContext.Provider>
//   );
// }

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


