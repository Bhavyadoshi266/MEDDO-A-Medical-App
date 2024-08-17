import React from 'react';
import Medicalgloves from './Images/Medicalgloves.jpg'


export default function Cart() {
    return (
        <>
            <section className='cart'>
                <div className="cart_wrapper">
                    <div className="cart_header ">
                        <h4 className='m-0 p-0 ' style={{color:'#222222',fontSize:'28px',fontWeight:'500'}}>Your Cart</h4>
                        <p className='m-0 p-0' style={{color:'#222222',fontWeight:'500'}} width='16px'  height='16px'><i class="fa-solid fa-x"></i></p>
                    </div>
                    <div className="cartwrapper_list">
                        <form action="" className='cart_form'>
                            <div className="cart_items">
                                <img src={Medicalgloves} alt="" className='cart_itemimg' />
                                <div className="cart_list_info">
                                    <p className='m-0 p-0' style={{color:'#222222',fontWeight:'700'}}>Vitamin B12</p>
                                    <p className='m-0 p-0'>$ 12.00 USD</p>
                                    <a href="" className='m-0 p-0 cart_remove'>REMOVE</a>
                                </div>
                                <input type="number" name="quantity" autocomplete="off" pattern="^[0-9]+$" value="1" className='cart_input' />
                            </div>

                            <div className="cart_footer">
                                <div className="cart_total">
                                    <p className='m-0 p-0'>Subtotal</p>
                                    <p className='m-0 p-0' style={{color:'#222222',fontWeight:'700'}}>$ 12.00 USD</p>
                                </div>
                                <a href="#" className="btn shop_btn">CONTINUE TO CHECKOUT</a>
                            </div>



                        </form>

                    </div>

                </div>
            </section>
        </>
    )
}
