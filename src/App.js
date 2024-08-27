import React,{useState} from 'react';
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
import CartProvider from './MyComponents/CartProvider'; 

function App() {

  const [isCartAppend, setisCartAppend] = useState(false);

  const CartClick = () => {
    setisCartAppend(!isCartAppend);
  };

  const CartClose = () => {
    setisCartAppend(false);
  };

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar onCartClick={CartClick} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/department" element={<Department />} />
            <Route path="/price" element={<Price />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/contact_us" element={<Contact_us />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Footer />
          {isCartAppend && <Cart onClose={CartClose} />}
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

