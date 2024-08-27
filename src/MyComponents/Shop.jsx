// import React from 'react';
// import vitaminB12 from './Images/vitaminB12.jpg'
// import medicalmask from './Images/medicalmask.jpg'
// import vitaminD3 from './Images/vitaminD3.jpg'
// import vitaminC from './Images/vitaminC.jpg'
// import Medicalgown from './Images/Medicalgown.jpg'
// import Medicalgloves from './Images/Medicalgloves.jpg'

// export default function Shop({addtocart}) {

//     const medicines = [
//         {
//             id: '1',
//             medicines_img: vitaminB12,
//             medicines_name: 'Vitamin B12',
//             medicines_decs: 'Vitamin, also known as cobalamin, is a crucial water-soluble ...',
//             medicines_price: '$ 12.00 USD',
//             medicines_type:'VITAMINS',
//         },
//         {
//             id: '2',
//             medicines_img: medicalmask,
//             medicines_name: 'Medical mask',
//             medicines_decs: 'Medical masks are a critical component of personal protective ...',
//             medicines_price: '$ 3.00 USD',
//             medicines_type:'MEANS OF PROTECTTION',
//         },
//         {
//             id: '3',
//             medicines_img: vitaminD3,
//             medicines_name: 'Vitamin D3',
//             medicines_decs: 'Vitamin D3, also known as cholecalciferol, is a vital nutrient ...',
//             medicines_price: '$ 13.00 USD',
//             medicines_type:'VITAMINS',
//         },
//         {
//             id: '4',
//             medicines_img: vitaminC,
//             medicines_name: 'Vitamin C',
//             medicines_decs: 'Vitamin C, also known as ascorbic acid, is a water-soluble vitamin ...',
//             medicines_price: '$ 11.00 USD',
//             medicines_type:'VITAMINS',
//         },
//         {
//             id: '5',
//             medicines_img: Medicalgown,
//             medicines_name: 'Medical gown',
//             medicines_decs: 'Medical gowns are a critical component of personal protective ...',
//             medicines_price: '$ 16.00 USD',
//             medicines_type:'MEANS OF PROTECTTION',
//         },
//         {
//             id: '6',
//             medicines_img: Medicalgloves,
//             medicines_name: 'Medical gloves',
//             medicines_decs: 'Medical gloves are a crucial part of personal protective ...',
//             medicines_price: '$ 15.00 USD',
//             medicines_type:'MEANS OF PROTECTTION',
//         },
//     ]

//     return (
//         <>
//             <div className="shop">
//                 <div className="wrapper">
//                     <div className="shop_corosul">
//                         <div className="shop_corosul_constant  animate-text">
//                             <p className='p-0 textheader'>Pricing Plans</p>
//                             <p className='p-0 my-2 text-white'>To provide flexibility and affordability, we offer a variety of pricing plans to meet the diverse needs of our patients.</p>
//                         </div>
//                     </div>

//                     <div className="shop_card animate-text row text-center">
//                         {medicines.map((item) => (
//                             <div className="col-sm-12 col-md-6 col-lg-4 mb-4 px-3" key={item.id}>
//                                 <div className="card h-100 speciality_body">
//                                     <div className="shopimg_container">
//                                         <img src={item.medicines_img} className="shop_img img-fluid" alt={item.medicines_name} />
//                                         <a href='' className="shopimg_text">{item.medicines_type}</a>
//                                     </div>

//                                     <div className="card-body product_content">
//                                         {/* <h5 className="card-title">{item.medicines_name}</h5> */}
//                                         <h5 className="card-title"> <a href="" className='speciality_title' style={{ fontSize: '28px' }}>{item.medicines_name}</a> </h5>

//                                         <p className="card-text speciality_text my-2">{item.medicines_decs}</p>
//                                         <p className="card-text shop_price">{item.medicines_price}</p>
//                                         <a href="#" className="btn shop_btn" onClick={() => addtocart(item)}>ADD TO CART</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }


import React,{ useContext } from 'react';
import vitaminB12 from './Images/vitaminB12.jpg'
import medicalmask from './Images/medicalmask.jpg'
import vitaminD3 from './Images/vitaminD3.jpg'
import vitaminC from './Images/vitaminC.jpg'
import Medicalgown from './Images/Medicalgown.jpg'
import Medicalgloves from './Images/Medicalgloves.jpg'

// import React, { useContext } from 'react';
// import { CartContext } from './MyComponents/CartContext.jsx';
import { CartContext } from './CartProvider';


export default function Shop() {

    const { addToCart } = useContext(CartContext);

    const medicines = [
        {
            id: '1',
            medicines_img: vitaminB12,
            medicines_name: 'Vitamin B12',
            medicines_decs: 'Vitamin, also known as cobalamin, is a crucial water-soluble ...',
            medicines_price: '$ 12.00 USD',
            medicines_type:'VITAMINS',
        },
        {
            id: '2',
            medicines_img: medicalmask,
            medicines_name: 'Medical mask',
            medicines_decs: 'Medical masks are a critical component of personal protective ...',
            medicines_price: '$ 3.00 USD',
            medicines_type:'MEANS OF PROTECTTION',
        },
        {
            id: '3',
            medicines_img: vitaminD3,
            medicines_name: 'Vitamin D3',
            medicines_decs: 'Vitamin D3, also known as cholecalciferol, is a vital nutrient ...',
            medicines_price: '$ 13.00 USD',
            medicines_type:'VITAMINS',
        },
        {
            id: '4',
            medicines_img: vitaminC,
            medicines_name: 'Vitamin C',
            medicines_decs: 'Vitamin C, also known as ascorbic acid, is a water-soluble vitamin ...',
            medicines_price: '$ 11.00 USD',
            medicines_type:'VITAMINS',
        },
        {
            id: '5',
            medicines_img: Medicalgown,
            medicines_name: 'Medical gown',
            medicines_decs: 'Medical gowns are a critical component of personal protective ...',
            medicines_price: '$ 16.00 USD',
            medicines_type:'MEANS OF PROTECTTION',
        },
        {
            id: '6',
            medicines_img: Medicalgloves,
            medicines_name: 'Medical gloves',
            medicines_decs: 'Medical gloves are a crucial part of personal protective ...',
            medicines_price: '$ 15.00 USD',
            medicines_type:'MEANS OF PROTECTTION',
        },
    ]

    return (
        <>
            <div className="shop">
                <div className="wrapper">
                    <div className="shop_corosul">
                        <div className="shop_corosul_constant  animate-text">
                            <p className='p-0 textheader'>Pricing Plans</p>
                            <p className='p-0 my-2 text-white'>To provide flexibility and affordability, we offer a variety of pricing plans to meet the diverse needs of our patients.</p>
                        </div>
                    </div>

                    <div className="shop_card animate-text row text-center">
                        {medicines.map((item) => (
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 px-3" key={item.id}>
                                <div className="card h-100 speciality_body">
                                    <div className="shopimg_container">
                                        <img src={item.medicines_img} className="shop_img img-fluid" alt={item.medicines_name} />
                                        <a href='' className="shopimg_text">{item.medicines_type}</a>
                                    </div>

                                    <div className="card-body product_content">
                                        {/* <h5 className="card-title">{item.medicines_name}</h5> */}
                                        <h5 className="card-title"> <a href="" className='speciality_title' style={{ fontSize: '28px' }}>{item.medicines_name}</a> </h5>

                                        <p className="card-text speciality_text my-2">{item.medicines_decs}</p>
                                        <p className="card-text shop_price">{item.medicines_price}</p>
                                        <a href="#" className="btn shop_btn" onClick={() => addToCart(item)}>ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
