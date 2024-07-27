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
//                             <div className="card mb-3" style={{ maxWidth: '540px' }}>
//                                 <div className="row g-0">
//                                     <div className="col-md-4">
//                                         <img src={item.serviesimg} className="img-fluid rounded-start" alt="..." />
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="card-body">
//                                             <h5 className="card-title">{item.servicename}</h5>
//                                             <p className="card-text">{item.servicedesc}</p>
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
import Footer from './Footer';
import Review_corousel from './Review_corousel';

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
            <div className="services">
                <Navbar />
                <div className="wrapper">
                    <div className="services_corosual_section text-center ">
                        <div className="services_corosual_section_content">
                            <h1 className="p-0 textheader">Our Services</h1>
                            <p className="p-0 my-2">Medicine is an ever-evolving field that blends science, technology, and compassion to improve and save lives</p>
                            <img src={logo} alt="Service Logo" className="logo_services img-fluid" />
                        </div>
                    </div>
                </div>

                
                <div className="services_service_section">
                    <div className="wrapper">
                        <div className="services_services_section  ">
                            <div className="container">
                                <div className="row ">
                                    {services.map((item) => (
                                        <div key={item.id} className="col-12 col-md-6 col-lg-6 mb-3 ">
                                            <div className="card service_card" >
                                                <div className="row g-4 ">
                                                    <div className="col-md-4">
                                                        <img src={item.serviesimg} className="img-fluid service_img" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body p-0">
                                                            <h5 className="card-title"> <a href="" className='service_card_header'>{item.servicename}</a> </h5>
                                                            <p className="card-text service_card_text">{item.servicedesc}</p>
                                                            <a href="#" className="service_card_link">READ MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="services_experience">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-3 border-end">
                                <p className='experience_text mb-0'>17+</p>
                                <p className='mb-0'>Years Experience</p>
                            </div>
                            <div className="col-3 border-end">
                                <p className='experience_text mb-0'>34</p>
                                <p className='mb-0'>Awards Nominees</p>
                            </div>
                            <div className="col-3 border-end">
                                <p className='experience_text mb-0'>7K+</p>
                                <p className='mb-0'>Happy Customers</p>
                            </div>
                            <div className="col-3">
                                <p className='experience_text mb-0'>99%</p>
                                <p className='mb-0'>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Review_corousel/>
                <Footer />
            </div>
        </>
    );
}
