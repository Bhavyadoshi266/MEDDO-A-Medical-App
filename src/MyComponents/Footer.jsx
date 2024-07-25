import React from 'react';
import logo2 from './Images/logo2.svg';

export default function Footer() {
    return (
        <>
            <section className='footer'>
                <div className="wrapper">
                    <div className="footer_logo animate-text">
                        <img src={logo2} alt="Logo" className='mb-3' height='45.8' />
                    </div>
                    <div className="container px-0 mb-5 animate-text">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className='py-3 m-0' style={{ color: "#ffffff", fontSize: '48px' }}>Have a question?</p>
                                <p className='my-2' style={{ color: "#ffffff" }}>Lorem ipsum dolor sit amet consectetur. Semper faucibus semper sed in urna. Suspendisse mauris dui magna nec nisl interdum. At vulputate cursus quis netus nibh pulvinar in nisl.</p>
                                <div className="mt-5 d-flex justify-content-center justify-content-md-start">
                                    <a href="#"><button className='btn_footer_contactus animate-text px-5 py-3'>CONTACT US</button></a>
                                </div>
                            </div>

                            <div className="col-12 col-md-3 d-flex flex-column justify-content-between align-items-center mb-4 mb-md-0">
                                <div className="col-12">
                                    <p className='footer_text'>Reach out to us at</p>
                                    <a href="tel:3025550107" className='footer_text_num'>(302) 555-0107</a><br />
                                    <a href="tel:6845550102" className='footer_text_num'>(684) 555-0102</a>
                                </div>
                                <div className="col-12">
                                    <p className='footer_text'>Office</p>
                                    <p style={{ color: '#ffffff', fontSize: '18px' }}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 d-flex flex-column justify-content-between align-items-center">
                                <div className="col-12">
                                    <p className='footer_text'>Reach out to us at</p>
                                    <a href="tel:3025550107" className='footer_text_num'>(302) 555-0107</a><br />
                                    <a href="tel:6845550102" className='footer_text_num'>(684) 555-0102</a>
                                </div>
                                <div className="col-12">
                                    <p className='footer_text'>Clinic</p>
                                    <p style={{ color: '#ffffff', fontSize: '18px' }}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_border_bottom">
                        <div className="footer_copyright">
                            <p className='m-0'>© Meddoc. All Rights Reserved 2024. Licensing</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
