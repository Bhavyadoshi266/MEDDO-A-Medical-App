// import React from 'react';
// import Corosel_to_aboutus from './Images/Corosel_to_aboutus.webp'
// import Innovation from './Innovation';

// export default function Corosel_two_aboutus() {
//     return (
//         <>
//             <div className="Corosel_two_aboutus">
//                 <div className="wrapper">
//                     <div className="container mb-5">
//                         <div className="row">
//                             <div className="Corosel_to_aboutus mb-5 py-1 px-0 d-flex flex-column flex-lg-row align-items-center">
//                                 <div className="Corosel_to_aboutus_left col-12 col-lg-6 mb-3 mb-lg-0 Corosel_to_aboutus_animateimage">
//                                     <img src={Corosel_to_aboutus} alt="Carousel Image" className="img-fluid" />
//                                 </div>
//                                 <div className="Corosel_to_aboutus_right col-12 col-lg-6 mb-lg-0 ">
//                                     <p className='col-12 Corosel_to_aboutus_header animate-text'>The better place of medical clinic center</p>
//                                     <ul className='col-12 Corosel_to_aboutus_text animate-text mb-5' style={{  listStyleType: "circle"}}>
//                                       <li style={{  listStyleType: "circle"}}>Our primary care services focus on maintaining and improving your overall health</li>
//                                       <li style={{  listStyleType: "circle"}}>Our pediatric services ensure that your children receive the best care from infancy through adolescence.</li>
//                                       <li style={{  listStyleType: "circle"}}>Our cardiology services are designed to keep your heart healthy and address any cardiac concerns.</li>
//                                     </ul>
//                                     <a href="#"><button className='btn_appointment animate-text py-3 px-5 mx-2 mb-3'>MAKE AN APPOINTMENT</button></a>
//                                     <a href="#"><button className='btn_aboutus animate-text px-5 py-3 mx-2'>ABOUT US</button></a>
//                                     <div className="Corosel_to_aboutus_count .container animate-text my-5">
//                                         <div className="row">
//                                             <div className="col-4">
//                                                 <div className="col-12 Corosel_to_aboutus_header">350+</div>
//                                                 <div className="col-12 count_name">Doctor’s Team</div>
//                                             </div>
//                                             <div className="col-4">
//                                                 <div className="col-12 Corosel_to_aboutus_header">165+</div>
//                                                 <div className="col-12 count_name">Successfull Surgeries</div>
//                                             </div> <div className="col-4">
//                                                 <div className="col-12 Corosel_to_aboutus_header">2K</div>
//                                                 <div className="col-12 count_name">Success Mission</div>
//                                             </div>
//                                             {/* <div className="col-4 Corosel_to_aboutus_header">350+</div>
//                                             <div className="col-4 Corosel_to_aboutus_header">165+</div>
//                                             <div className="col-4 Corosel_to_aboutus_header">2K</div>
//                                             <div className="col-4 count_name">Doctor’s Team</div>
//                                             <div className="col-4 count_name">Successfull Surgeries</div>
//                                             <div className="col-4 count_name">Success Mission</div> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             <Innovation/>

//             </div>

//         </>
//     )
// }


import React from 'react';
import Corosel_to_aboutus from './Images/Corosel_to_aboutus.webp';
import Innovation from './Innovation';

export default function Corosel_two_aboutus() {
    return (
        <>
            <div className="Corosel_two_aboutus">
                <div className="wrapper">
                    <div className="container mb-5">
                        <div className="row">
                            <div className="Corosel_to_aboutus mb-5 py-1 px-0 d-flex flex-column flex-lg-row align-items-center">
                                <div className="Corosel_to_aboutus_left col-12 col-lg-6 mb-3 mb-lg-0 Corosel_to_aboutus_animateimage">
                                    <img src={Corosel_to_aboutus} alt="Carousel Image" className="img-fluid" />
                                </div>
                                <div className="Corosel_to_aboutus_right col-12 col-lg-6 mb-lg-0">
                                    <p className='col-12 Corosel_to_aboutus_header animate-text'>The better place of medical clinic center</p>
                                    <ul className='col-12 Corosel_to_aboutus_text animate-text mb-5' style={{ listStyleType: "circle" }}>
                                        <li style={{ listStyleType: "circle" }}>Our primary care services focus on maintaining and improving your overall health</li>
                                        <li style={{ listStyleType: "circle" }}>Our pediatric services ensure that your children receive the best care from infancy through adolescence.</li>
                                        <li style={{ listStyleType: "circle" }}>Our cardiology services are designed to keep your heart healthy and address any cardiac concerns.</li>
                                    </ul>
                                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                                        <a href="#"><button className='btn_appointment animate-text py-3 px-5 mx-2 mb-3'>MAKE AN APPOINTMENT</button></a>
                                        <a href="#"><button className='btn_aboutus animate-text px-5 py-3 mx-2'>ABOUT US</button></a>
                                    </div>
                                    <div className="Corosel_to_aboutus_count container animate-text my-5">
                                        <div className="row">
                                            <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
                                                <div className="Corosel_to_aboutus_header">350+</div>
                                                <div className="count_name">Doctor’s Team</div>
                                            </div>
                                            <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
                                                <div className="Corosel_to_aboutus_header">165+</div>
                                                <div className="count_name">Successful Surgeries</div>
                                            </div>
                                            <div className="col-12 col-md-4 text-center text-md-start">
                                                <div className="Corosel_to_aboutus_header">2K</div>
                                                <div className="count_name">Success Mission</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Innovation />
            </div>
        </>
    );
}
