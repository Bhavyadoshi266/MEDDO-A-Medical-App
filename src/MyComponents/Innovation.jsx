import React from 'react';
import innovation_bgimg from './Images/innovation_bgimg.svg'

export default function Innovation() {
    return (
        <>
            <div className="innovation">
                <div className="wrapper">
                    <div className="container flow-up">
                        <div className="row">
                            <p className="col-9 speciality_header">INNOVATIVE SOLUTIONS FOR BETTER HEALTH</p>
                            <p className="col-9 speciality_headertext">We strive to build a healthier community through exceptional medical care, ongoing education, and advanced technology</p>
                            <div className="col-10 d-flex gap-5 mt-5 innovation_text">
                                <p className="col-5 speciality_text">Our team of dedicated healthcare professionals is committed to providing personalized, compassionate care to each and every patient. We take the time to understand your unique health needs and develop tailored treatment plans that promote long-term wellness. From routine check-ups to specialized treatments.</p>
                                <p className="col-5 speciality_text">We believe that knowledge is a powerful tool for maintaining good health. Our clinic offers a wealth of educational resources designed to inform and empower our patients. Through workshops, seminars, and one-on-one consultations, we provide the latest information on health and wellness topics.</p>
                            </div>
                            <a href="#"><button className='btn_aboutus animate-text px-5 py-3 mt-5'>MAKE AN APPOINTMENT</button></a>
                            <div className="innovation_img text-lg-end">
                                <img src={innovation_bgimg} alt="" width="590px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

