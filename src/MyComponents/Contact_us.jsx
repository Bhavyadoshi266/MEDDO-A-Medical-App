import React from 'react'

export default function Contact_us() {
    return (
        <>
            <section className='contact_us'>

                <div className="img_contact_us">
                    <div className="department_section_content  animate-text">
                        <h1 className="p-0 textheader">Contact Us</h1>
                        <p className="p-0 my-2 text-white">Whether you have a question, need to schedule an appointment, or require assistance with your medical care, we are here to help.</p>
                    </div>
                </div>

                <div className="wrapper">
                    {/* <div className="conatct_details .container">
                        <div className="row d-flex justify-content-between align-items-start">
                            <div className="col-4 conatct_detail" style={{borderRight: "1px solid rgb(255,255,255,0.2)"}}>
                                <p className='m-0'><i class="fa-solid fa-location-dot"></i></p>
                                <a href="https://www.google.com/maps?sca_esv=555467477&amp;output=search&amp;q=1333+2nd+Ave,+Seattle,+WA+98118&amp;source=lnms&amp;entry=mc&amp;sa=X&amp;ved=2ahUKEwjJ5ZrgrtKAAxVszgIHHQx-AjwQ0pQJegQICxAB" target="_blank" class="conatct_detail_text">4517 Washington Ave. Manchester, Kentucky 39495</a>
                            </div>
                            <div className="col-4 conatct_detail center_borders">
                                <p className='m-0'><i class="fa-solid fa-envelope"></i></p>
                                <a className='m-0 conatct_detail_text'  href="mailto:meddoc@simple.com" >meddoc@simple.com</a>
                            </div>
                            <div className="col-4 conatct_detail" style={{borderLeft: "1px solid rgb(255,255,255,0.2)"}}>
                                <p className='m-0'><i class="fa-solid fa-phone"></i></p>
                                <a className='m-0 conatct_detail_text' href="tel:(302)5550107">(302) 555 0107</a>
                                <a className='m-0 conatct_detail_text' href="tel:(684) 555 0102">(684) 555 0102</a>
                            </div>
                        </div>
                    </div> */}

                    <div className="conatct_details_wrapper animate-text">
                        <div className="conatct_details container">
                            <div className="row d-flex justify-content-between align-items-start ">
                                <div className="col-12 col-md-4 conatct_detail mb-3 mb-md-0" style={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}>
                                    <p className="m-0"><i className="fa-solid fa-location-dot"></i></p>
                                    <a href="https://www.google.com/maps?sca_esv=555467477&amp;output=search&amp;q=1333+2nd+Ave,+Seattle,+WA+98118&amp;source=lnms&amp;entry=mc&amp;sa=X&amp;ved=2ahUKEwjJ5ZrgrtKAAxVszgIHHQx-AjwQ0pQJegQICxAB" target="_blank" rel="noopener noreferrer" className="conatct_detail_text">4517 Washington Ave. Manchester, Kentucky 39495</a>
                                </div>
                                <div className="col-12 col-md-4 conatct_detail mb-3 mb-md-0 center_borders">
                                    <p className="m-0"><i className="fa-solid fa-envelope"></i></p>
                                    <a className="m-0 conatct_detail_text" href="mailto:meddoc@simple.com">meddoc@simple.com</a>
                                </div>
                                <div className="col-12 col-md-4 conatct_detail" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)" }}>
                                    <p className="m-0"><i className="fa-solid fa-phone"></i></p>
                                    <a className="m-0 conatct_detail_text" href="tel:(302)5550107">(302) 555 0107</a>
                                    <a className="m-0 conatct_detail_text" href="tel:(684) 555 0102">(684) 555 0102</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact_appointment">
                        <div className="container">

                            <div className="contact_appointment_wrapper p-0 m-0 ">
                                <div className="row flex-column flex-lg-row">
                                    <div className="contact_appointment_top p-0 m-0">
                                        <div className="appointment_container_header">
                                            <p className='Corosel_to_aboutus_header animate-text' style={{ color: "#222222", fontWeight: '500' }}>Appointments to Meddoc</p>
                                            <p className='processdesc animate-text'>To schedule an appointment, please call our office during business hours or use our online scheduling system available on our website. For urgent care needs, we also accept walk-in appointments.</p>
                                        </div>
                                        <div className="appointment_container_bottom ">
                                            <p className='m-0 animate-text'>Social media:</p>
                                            <div className="social_medaia animate-text">
                                                <a href=""> <i class="fa-brands fa-facebook"></i></a>
                                                <a href=""> <i class="fa-brands fa-instagram"></i></a>
                                                <a href=""> <i class="fa-brands fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 contact_appointment_form d-flex justify-content-between align-items-center p-0 m-0">
                                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                                            <input type="text" placeholder='Select service' className="form-control" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" placeholder='Select service' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="contact_appointment">
                        <div className="container">
                            <div className="row">
                                <div className="contact_appointment_wrapper p-0 m-0">
                                    <div className="row flex-column flex-lg-row">

                                        <div className="col-12 contact_appointment_top p-0 m-0">
                                            <div className="appointment_container_header">
                                                <p className='Corosel_to_aboutus_header animate-text' style={{ color: "#222222", fontWeight: '500' }}>Appointments to Meddoc</p>
                                                <p className='processdesc animate-text'>To schedule an appointment, please call our office during business hours or use our online scheduling system available on our website. For urgent care needs, we also accept walk-in appointments.</p>
                                            </div>
                                            <div className="appointment_container_bottom">
                                                <p className='m-0 animate-text'>Social media:</p>
                                                <div className="social_media animate-text">
                                                    <a href=""> <i className="fa-brands fa-facebook"></i></a>
                                                    <a href=""> <i className="fa-brands fa-instagram"></i></a>
                                                    <a href=""> <i className="fa-brands fa-youtube"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12 contact_appointment_form d-flex justify-content-between align-items-center p-0 m-0">
                                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                                <input type="text" placeholder='Select service' className="form-control" />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <input type="text" placeholder='Select service' className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>









                <div className="join_team ">
                    <div className="join_team_img">
                        <div className="wrapper container animate-text">
                            <div className="row join_team_container ">
                                <div className="col-lg-7 col-md-12 mb-3">
                                    <p style={{ fontSize: "48px", color: '#ffffff', lineHeight: '1.2em' }}>Join our Meddoc team and help make the world a better place!</p>
                                    <p className='col-lg-9' style={{ fontSize: "16px", color: '#ffffff' }}>We believe in the power of teamwork and collaboration to provide comprehensive care tailored to each individual's needs.</p>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <a href="" className='join_teamlink'>JOIN US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
