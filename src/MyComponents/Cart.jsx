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

import React, { useContext } from 'react';
import Medicalgloves from './Images/Medicalgloves.jpg';
import { CartContext } from './CartProvider';

export default function Cart(props) {

    const { cartitem, removeItem } = useContext(CartContext);

    return (
        <div className="cart-overlay cart">
            <section className='cart-content'>
                <div className="cart_wrapper">
                    <div className="cart_header">
                        <h4 className='m-0 p-0' style={{ color: '#222222', fontSize: '28px', fontWeight: '500' }}>Your Cart</h4>
                        <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '500', cursor: 'pointer' }} onClick={props.onClose}>
                            <i className="fa-solid fa-x"></i>
                        </p>
                    </div>
                    <div className="cartwrapper_list">
                        <form action="" className='cart_form'>

                            {cartitem.map(item => (
                                <div className="cart_items" key={item.id}>
                                    <img src={item.medicines_img} alt="" className='cart_itemimg' />
                                    <div className="cart_list_info">
                                        <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>{item.medicines_name}</p>
                                        <p className='m-0 p-0'>{item.medicines_price}</p>
                                        <a href="#" className='m-0 p-0 cart_remove' onClick={() => removeItem(item.id)}>REMOVE</a>
                                    </div>
                                    <input type="number" name="quantity" autoComplete="off" pattern="^[0-9]+$" value={item.quantity} className='cart_input' />
                                </div>
                            ))}

                            <div className="cart_footer">
                                <div className="cart_total">
                                    <p className='m-0 p-0'>Subtotal</p>
                                    <p className='m-0 p-0' style={{ color: '#222222', fontWeight: '700' }}>
                                        $ {cartitem.reduce((total, item) => total + (item.medicines_price * item.quantity), 0).toFixed(2)} USD
                                    </p>
                                </div>
                                <a href="#" className="btn shop_btn">CONTINUE TO CHECKOUT</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>

        //     <div className="cart cart-overlay">
        //     <button onClick={onClose}>Close</button>
        //     <h3>Your Cart</h3>
        //     <ul>
        //       {cartItems.map(item => (
        //         <li key={item.id}>
        //           {item.medicines_name} - Quantity: {item.quantity}
        //           <button onClick={() => removeItem(item.id)}>Remove</button>
        //         </li>
        //       ))}
        //     </ul>
        //   </div>
    );
}
