import React from 'react';
import logo2 from './Images/logo2.svg'

export default function Footer() {
    return (
        <>
            <section className='footer'>
                <div className="wrapper">
                    <div className="footer_logo d-flex align-items-center justify-content-between">
                        <img src={logo2} alt="" className='logo col-12 mb-3' />
                    </div>
                    <div className="container">
                        <div className="row">


                            <div className="col-6">
                                <p className='py-3 m-0' style={{ color: "#ffffff", fontSize: '48px' }}>Have a question?</p>
                                <p className='my-2' style={{ color: "#ffffff" }}>Lorem ipsum dolor sit amet consectetur. Semper faucibus semper sed in urna. Suspendisse mauris dui magna nec nisl interdum. At vulputate cursus quis netus nibh pulvinar in nisl.</p>
                                <div className="col-12 mt-5 d-flex justify-content-center justify-content-md-start">
                                    <a href="#"><button className='btn_footer_contactus animate-text px-5 py-3'>CONTACT US</button></a>
                                </div>
                            </div>
                            <div className="col-6 d-flex">
                                <div className="col-6">
                                    <p>Reach out to us at</p>
                                    <a href="">(302) 555-0107</a><br />
                                    <a href="">(684) 555-0102</a>
                                </div>
                                <div className="col-6">
                                    <p>Reach out to us at</p>
                                    <a href="">(302) 555-0107</a>
                                    <a href="">(684) 555-0102</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
