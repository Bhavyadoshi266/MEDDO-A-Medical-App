// import React from 'react';
// import innovation_bgimg from './Images/innovation_bgimg.svg';
// import Departments from './Departments';

// export default function Innovation() {
//     return (
//         <>
//             <div className="innovation">
//                 <div className="wrapper">
//                     <div className="container flow-up ">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="col-12 col-md-9">
//                                     <p className="speciality_header">INNOVATIVE SOLUTIONS FOR BETTER HEALTH</p>
//                                     <p className="speciality_headertext">
//                                         We strive to build a healthier community through exceptional medical care, ongoing education, and advanced technology.
//                                     </p>
//                                 </div>
//                                 <div className="col-12 col-md-10 d-flex flex-column flex-md-row  mt-5 innovation_text">
//                                     <p className="col-4 col-md-5 speciality_text">
//                                         Our team of dedicated healthcare professionals is committed to providing personalized, compassionate care to each and every patient. We take the time to understand your unique health needs and develop tailored treatment plans that promote long-term wellness. From routine check-ups to specialized treatments.
//                                     </p>
//                                     <p className="col-4 col-md-5 speciality_text">
//                                         We believe that knowledge is a powerful tool for maintaining good health. Our clinic offers a wealth of educational resources designed to inform and empower our patients. Through workshops, seminars, and one-on-one consultations, we provide the latest information on health and wellness topics.
//                                     </p>
//                                 </div>
//                                 <div className="col-12 mt-5 d-flex justify-content-center justify-content-md-start">
//                                     <a href="#"><button className='btn_aboutus animate-text px-5 py-3'>MAKE AN APPOINTMENT</button></a>
//                                 </div>
//                                 <div className="col-12 mt-5 text-center text-md-end innovation_img ">
//                                     <img src={innovation_bgimg} alt="Innovation Background" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} width="590px" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Departments />

//             </div>

//         </>
//     );
// }


import React from 'react';
import innovation_bgimg from './Images/innovation_bgimg.svg';
import Departments from './Departments';

export default function Innovation() {
    return (
        <>
            <div className="innovation">
                <div className="wrapper">
                    <div className="container flow-up">
                        <div className="row">
                            <div className="col-12">
                                <div className="col-12 col-md-9">
                                    <p className="speciality_header">INNOVATIVE SOLUTIONS FOR BETTER HEALTH</p>
                                    <p className="speciality_headertext">
                                        We strive to build a healthier community through exceptional medical care, ongoing education, and advanced technology.
                                    </p>
                                </div>
                                <div className="col-12 col-md-10 gap-4 d-flex flex-column flex-md-row mt-5 innovation_text">
                                    <p className="col-12 col-md-5 speciality_text">
                                        Our team of dedicated healthcare professionals is committed to providing personalized, compassionate care to each and every patient. We take the time to understand your unique health needs and develop tailored treatment plans that promote long-term wellness. From routine check-ups to specialized treatments.
                                    </p>
                                    <p className="col-12 col-md-5 speciality_text">
                                        We believe that knowledge is a powerful tool for maintaining good health. Our clinic offers a wealth of educational resources designed to inform and empower our patients. Through workshops, seminars, and one-on-one consultations, we provide the latest information on health and wellness topics.
                                    </p>
                                </div>
                                <div className="col-12 mt-5 d-flex justify-content-center justify-content-md-start">
                                    <a href="#"><button className='btn_aboutus animate-text px-5 py-3'>MAKE AN APPOINTMENT</button></a>
                                </div>
                            </div>
                            <div className="col-12 mt-5 text-center text-md-end innovation_img">
                                <img src={innovation_bgimg} alt="Innovation Background" className="img-fluid" style={{ Width: '100%', height: 'auto' }}  />
                            </div>

                        </div>
                    </div>
                </div>

                <Departments />
            </div>
        </>
    );
}
