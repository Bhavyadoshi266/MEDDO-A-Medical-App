// import React from 'react'
// import Navbar from './Navbar';
// import logo from './Images/service_white_logo.svg';
// import service_one from './Images/service_one.jpg';
// import service_two from './Images/service_two.jpg'
// import service_three from './Images/service_three.jpg'
// import service_four from './Images/service_four.jpg'
// import service_five from './Images/service_five.jpg'
// import service_six from './Images/service_six.jpg'


// export default function Services() {
//     const services = [
//         {
//             id: 1,
//             serviesimg: service_one,
//             servicename: 'Medical consultations',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         },
//         {
//             id: 2,
//             serviesimg: service_two,
//             servicename: 'Telemedicine services',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         }, {
//             id: 3,
//             serviesimg: service_three,
//             servicename: 'Geriatric care',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         }, {
//             id: 4,
//             serviesimg: service_four,
//             servicename: 'Dermatological treatment',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         }, {
//             id: 5,
//             serviesimg: service_five,
//             servicename: 'Health screenings',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         }, {
//             id: 6,
//             serviesimg: service_six,
//             servicename: 'Chronic disease management',
//             servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
//         },
//     ]

//     return (
//         <>
//             <div className="services py-3">
//                 <Navbar />
//                 <div className="wrapper">
//                     <div className="services_corosual_section">
//                         <div className="services_corosual_section_containt">
//                             <h1 className='p-0  textheader'>Our Services</h1>
//                             <p className='p-0 my-2'>Medicine is an ever-evolving field that blends science, technology, and compassion to improve and save lives</p>
//                             <img src={logo} alt="" className='logo_services' />
//                         </div>
//                     </div>
//                     <div className="services_services_section">
//                         {services.map((item) => (
//                             <div class="card mb-3" style={{ maxWidth: '540px' }}>
//                                 <div class="row g-0">
//                                     <div class="col-md-4">
//                                         <img src={item.serviesimg} class="img-fluid rounded-start" alt="..." />
//                                     </div>
//                                     <div class="col-md-8">
//                                         <div class="card-body">
//                                             <h5 class="card-title">{item.servicename}</h5>
//                                             <p class="card-text">{item.servicedesc}</p>
//                                             <a href="">READ MORE</a>
//                                         </div>
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

import React from 'react';
import Navbar from './Navbar';
import logo from './Images/service_white_logo.svg';
import service_one from './Images/service_one.jpg';
import service_two from './Images/service_two.jpg';
import service_three from './Images/service_three.jpg';
import service_four from './Images/service_four.jpg';
import service_five from './Images/service_five.jpg';
import service_six from './Images/service_six.jpg';

export default function Services() {
    const services = [
        {
            id: 1,
            serviesimg: service_one,
            servicename: 'Medical consultations',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
        {
            id: 2,
            serviesimg: service_two,
            servicename: 'Telemedicine services',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
        {
            id: 3,
            serviesimg: service_three,
            servicename: 'Geriatric care',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
        {
            id: 4,
            serviesimg: service_four,
            servicename: 'Dermatological treatment',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
        {
            id: 5,
            serviesimg: service_five,
            servicename: 'Health screenings',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
        {
            id: 6,
            serviesimg: service_six,
            servicename: 'Chronic disease management',
            servicedesc: 'We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.',
        },
    ];

    return (
        <>
            <div className="services py-3">
                <Navbar />
                <div className="wrapper">
                    <div className="services_corosual_section text-center">
                        <div className="services_corosual_section_content">
                            <h1 className="p-0 textheader">Our Services</h1>
                            <p className="p-0 my-2">Medicine is an ever-evolving field that blends science, technology, and compassion to improve and save lives</p>
                            <img src={logo} alt="Service Logo" className="logo_services img-fluid" />
                        </div>
                    </div>
                    
                    <div className="services_services_section container">
                        <div className="row">
                            {services.map((item) => (
                                <div key={item.id} className="col-12 col-md-6 col-lg-6 mb-3 ">
                                    <div class="card mb-3 service_card" >
                                        <div class="row g-4">
                                            <div class="col-md-4">
                                                <img src={item.serviesimg} class="img-fluid service_img" alt="..."/>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body p-0">
                                                    <h5 class="card-title"> <a href="" className='service_card_header'>{item.servicename}</a> </h5>
                                                    <p class="card-text service_card_text">{item.servicedesc}</p>
                                                    <a href="#" className="service_card_link">READ MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card h-100" style={{ maxWidth: '540px' }}>
                                        <img src={item.serviesimg} className="card-img-top" alt={item.servicename} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.servicename}</h5>
                                            <p className="card-text">{item.servicedesc}</p>
                                            <a href="#" className="btn btn-primary">READ MORE</a>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
