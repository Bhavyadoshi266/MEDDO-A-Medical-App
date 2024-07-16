
// import React from 'react';
// import corosel_oneone from './Images/corosel_oneone.webp';

// export default function Corosel_one() {
//     return (
//         <>
//             <div className="Corosel_one py-1">
//                 <div className="container flow-up">
//                     <div className="row">
//                         <div className="Corosel_on py-1 px-0 d-flex flex-column flex-lg-row align-items-center">
//                             <div className="Corosel_one_left col-12 col-lg-6 mb-lg-0">
//                                 <p className='col-12 Corosel_one_left_header'>Committed to your wellbeing</p>
//                                 <p className='col-12 Corosel_one_left_text'>
//                                     We take the time to understand your unique health needs and develop tailored treatment
//                                     plans that promote long-term wellness. From routine check-ups to specialized treatments.
//                                 </p>
//                                 <a href="#"><button className='btn_appointment'>MAKE AN APPOINTMENT</button></a>
//                             </div>
//                             <div className="Corosel_one_right col-12 col-lg-6 mb-3 mb-lg-0">
//                                 <img src={corosel_oneone} alt="Carousel Image" className="img-fluid" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React from 'react';
import corosel_oneone from './Images/corosel_oneone.webp';


export default function Corosel_one() {
    return (
        <>
            <div className="Corosel_one py-1">
                <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="Corosel_on my-1 px-0 d-flex flex-column flex-lg-row align-items-center">
                            <div className="Corosel_one_left col-12 col-lg-6 mb-lg-0 ">
                                <p className='col-12 Corosel_one_left_header animate-text'>Committed to your wellbeing</p>
                                <p className='col-12 Corosel_one_left_text animate-text'>
                                    We take the time to understand your unique health needs and develop tailored treatment
                                    plans that promote long-term wellness. From routine check-ups to specialized treatments.
                                </p>
                                <a href="#"><button className='btn_appointment animate-text py-3 px-5 '>MAKE AN APPOINTMENT</button></a>
                            </div>
                            <div className="Corosel_one_right col-12 col-lg-6 mb-3 mb-lg-0 animate-image">
                                <img src={corosel_oneone} alt="Carousel Image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    );
}

