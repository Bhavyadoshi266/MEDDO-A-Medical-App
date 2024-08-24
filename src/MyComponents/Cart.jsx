// import React, { useState } from 'react';
// import Medicalgloves from './Images/Medicalgloves.jpg'

// export default function Cart({ onClose }) {

//     const removeItem = (itemId) => {
//         const updatedItems = cartItems.filter(item => item.id !== itemId);
//         setCartItems(updatedItems);
//     };


//     return (
//         <div className="cart-overlay cart">

//             <section className=' cart-content'>
//                 <div className="cart_wrapper ">

//                     <div className="cart_header ">
//                         <h4 className='m-0 p-0 ' style={{ color: '#222222', fontSize: '28px', fontWeight: '500' }}>Your Cart</h4>
//                         <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '500', cursor: 'pointer' }} width='16px' height='16px' onClick={onClose}><i class="fa-solid fa-x"></i></p>
//                     </div>
//                     <div className="cartwrapper_list">
//                         <form action="" className='cart_form'>
//                             <div className="cart_items">
//                                 <img src={Medicalgloves} alt="" className='cart_itemimg' />
//                                 <div className="cart_list_info">
//                                     <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>Vitamin B12</p>
//                                     <p className='m-0 p-0'>$ 12.00 USD</p>
//                                     <a href="" className='m-0 p-0 cart_remove' onClick={item}>REMOVE</a>
//                                 </div>
//                                 <input type="number" name="quantity" autocomplete="off" pattern="^[0-9]+$" value="1" className='cart_input' />
//                             </div>

//                             <div className="cart_footer">
//                                 <div className="cart_total">
//                                     <p className='m-0 p-0'>Subtotal</p>
//                                     <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>$ 12.00 USD</p>
//                                 </div>
//                                 <a href="#" className="btn shop_btn">CONTINUE TO CHECKOUT</a>
//                             </div>

//                         </form>

//                     </div>

//                 </div>
//             </section>

//         </div>
//     );
// }

import React, { useState } from 'react';
import Medicalgloves from './Images/Medicalgloves.jpg';

export default function Cart({ onClose,cartItems,removeItem }) {

    return (
        <div className="cart-overlay cart">
            <section className='cart-content'>
                <div className="cart_wrapper">
                    <div className="cart_header">
                        <h4 className='m-0 p-0' style={{ color: '#222222', fontSize: '28px', fontWeight: '500' }}>Your Cart</h4>
                        <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '500', cursor: 'pointer' }} onClick={onClose}>
                            <i className="fa-solid fa-x"></i>
                        </p>
                    </div>
                    <div className="cartwrapper_list">
                        <form action="" className='cart_form'>
                            {cartItems > 0 ? (
                                cartItems.map(item => (
                                    <div className="cart_items" key={item.id}>
                                        <img src={item.image} alt="" className='cart_itemimg' />
                                        <div className="cart_list_info">
                                            <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>{item.name}</p>
                                            <p className='m-0 p-0'>${item.price.toFixed(2)} USD</p>
                                            <a href="#" className='m-0 p-0 cart_remove' onClick={() => removeItem(item.id)}>REMOVE</a>
                                        </div>
                                        <input type="number" name="quantity" autoComplete="off" pattern="^[0-9]+$" value={item.quantity} className='cart_input' />
                                    </div>
                                ))
                            ) : ( 
                                <p className='px-5 py-4 m-0'>Your cart is empty.</p>
                            )}
                            {cartItems > 0 && (
                                <div className="cart_footer">
                                    <div className="cart_total">
                                        <p className='m-0 p-0'>Subtotal</p>
                                        <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>
                                            ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)} USD
                                        </p>
                                    </div>
                                    <a href="#" className="btn shop_btn">CONTINUE TO CHECKOUT</a>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
