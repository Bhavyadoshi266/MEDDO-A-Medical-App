import React from 'react';
import Review_corousel from './Review_corousel';
import Blog from './Blog';
import { Link, Outlet } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


export default function Price() {
    return (
        <>
            <div className="price ">
                <div className="wrapper">
                    <div className="price_corosul">
                        <div className="price_corosul_constant  animate-text">
                            <p className='p-0 textheader'>Pricing Plans</p>
                            <p className='p-0 my-2 text-white'>To provide flexibility and affordability, we offer a variety of pricing plans to meet the diverse needs of our patients.</p>
                        </div>
                    </div>

                    <div className="price_plan">
                        <p className='price_corosul_constant price_plan_header  animate-text'>Affordable Pricing Plans for Comprehensive Healthcare</p>

                        <div className="price_plan_option">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="pricing_container">

                                            <div className="price_plan_info">
                                                <p >Basic Plan</p>
                                                <hr style={{ border: '1px solid #ffffff', width: '100%' }} />
                                                <p className='m-0'> $ <span className='' style={{ fontSize: "62px" }}>45</span>/month</p>
                                            </div>

                                            <div className="list_price_wrapper">
                                                <ul role="list" class="pricing_plan_list">
                                                    <li>One general consultation per month</li>
                                                    <li>Annual physical exam</li>
                                                    <li>Access to online patient portal</li>
                                                    <li>Basic health screenings</li>
                                                </ul>
                                                <Link to="/contact_us" className='list_price_link'>BUY NOW</Link>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="pricing_container">

                                            <div className="price_plan_info">
                                                <p>Premium Plan</p>
                                                <hr style={{ border: '1px solid #ffffff', width: '100%' }} />
                                                <p>$ <span className='' style={{ fontSize: "62px" }}>100</span>/month</p>
                                            </div>

                                            <div className="list_price_wrapper">
                                                <ul role="list" class="pricing_plan_list">
                                                    <li>Unlimited general consultations</li>
                                                    <li>Access to online patient portal</li>
                                                    <li>Comprehensive health screenings</li>
                                                    <li>Annual physical exam</li>
                                                    <li>Telemedicine consultations</li>
                                                    <li>Priority scheduling</li>
                                                </ul>
                                                <Link to="/contact_us" className='list_price_link'>BUY NOW</Link>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="pricing_container">

                                            <div className="price_plan_info">
                                                <p>Standard Plan</p>
                                                <hr style={{ border: '1px solid #ffffff', width: '100%' }} />
                                                <p>$ <span className='' style={{ fontSize: "62px" }}>65</span>/month</p>
                                            </div>

                                            <div className="list_price_wrapper">
                                                <ul role="list" class="pricing_plan_list">
                                                    <li>Two general consultations per month</li>
                                                    <li>Access to online patient portal</li>
                                                    <li>Telemedicine consultations</li>
                                                    <li>Annual physical exam</li>
                                                </ul>
                                                <Link to="/contact_us" className='list_price_link'>BUY NOW</Link>
                                            </div>



                                        </div>
                                    </div>
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

                <Review_corousel />
                <Blog />

                
                <Outlet />
            </div>
        </>
    )
}
