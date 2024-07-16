import React from 'react';
import Corosel_to_aboutus from './Images/Corosel_to_aboutus.webp'

export default function Corosel_two_aboutus() {
    return (
        <>
            <div className="Corosel_two_aboutus">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="Corosel_to_aboutus py-1 px-0 d-flex flex-column flex-lg-row align-items-center">
                                <div className="Corosel_to_aboutus_left col-12 col-lg-6 mb-3 mb-lg-0 Corosel_to_aboutus_animateimage">
                                    <img src={Corosel_to_aboutus} alt="Carousel Image" className="img-fluid" />
                                </div>
                                <div className="Corosel_to_aboutus_right col-12 col-lg-6 mb-lg-0 ">
                                    <p className='col-12 Corosel_to_aboutus_header animate-text'>The better place of medical clinic center</p>
                                    <ul className='col-12 Corosel_to_aboutus_text animate-text' style={{  listStyleType: "circle"}}>
                                      <li style={{  listStyleType: "circle"}}>Our primary care services focus on maintaining and improving your overall health</li>
                                      <li style={{  listStyleType: "circle"}}>Our pediatric services ensure that your children receive the best care from infancy through adolescence.</li>
                                      <li style={{  listStyleType: "circle"}}>Our cardiology services are designed to keep your heart healthy and address any cardiac concerns.</li>
                                    </ul>
                                    <a href="#"><button className='btn_appointment animate-text py-3 px-5 mb-5'>MAKE AN APPOINTMENT</button></a>
                                    <a href="#"><button className='btn_aboutus animate-text px-5 py-3 mb-5'>ABOUT US</button></a>
                                    <div className="Corosel_to_aboutus_count .cotainer animate-text">
                                        <div className="row">
                                            <div className="col-4 Corosel_to_aboutus_header">350+</div>
                                            <div className="col-4 Corosel_to_aboutus_header">165+</div>
                                            <div className="col-4 Corosel_to_aboutus_header">2K</div>
                                            <div className="col-4 count_name">Doctor’s Team</div>
                                            <div className="col-4 count_name">Successfull Surgeries</div>
                                            <div className="col-4 count_name">Success Mission</div>
                                        </div>
                                      
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
