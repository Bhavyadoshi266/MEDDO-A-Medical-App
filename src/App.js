import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './MyComponents/Blog';
import Homepage from './MyComponents/Homepage';
import Navbar from './MyComponents/Navbar';
import Services from './MyComponents/Services';
import './MyComponents/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from './MyComponents/Department';
import Footer from './MyComponents/Footer';
import Price from './MyComponents/Price';
import Contact_us from './MyComponents/Contact_us';
import Shop from './MyComponents/Shop';
import Cart from './MyComponents/Cart';

function App() {

  const [isCartAppend, setIsCartAppend] = useState(false);

  const [cartItems, setcartItems] = useState();

  const CartClick = () => {
    setIsCartAppend(!isCartAppend);
  };

  const CartClose = () => {
    setIsCartAppend(false);
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setcartItems(updatedItems);
  };

  const addtocart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setcartItems(updatedItems);
    } else {
      // If the item is new, add it to the cart with quantity 1
      setcartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  return (
    <>
      <BrowserRouter>
        <Navbar onCartClick={CartClick} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/price" element={<Price />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/shop" element={<Shop addtocart={addtocart} />} />
        </Routes>
        <Footer />
        {isCartAppend && <Cart onClose={CartClose} cartItems={cartItems} removeItem={removeItem} />}
      </BrowserRouter>
    </>
  );
}

export default App;
