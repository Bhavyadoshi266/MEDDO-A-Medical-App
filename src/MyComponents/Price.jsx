import React from 'react';

export default function Price() {
    return (
        <>
            <div className="price">
                <div className="wrapper">
                    <div className="price_corosul">
                        <div className="price_corosul_constant">
                            <p className='p-0 textheader'>Pricing Plans</p>
                            <p className='p-0 my-2 text-white'>To provide flexibility and affordability, we offer a variety of pricing plans to meet the diverse needs of our patients.</p>
                        </div>
                    </div>

                    <div className="price_plan">
                        <p className='price_corosul_constant price_plan_header'>Affordable Pricing Plans for Comprehensive Healthcare</p>

                        <div className="price_plan_option">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="price_plan_info">
                                            <p>Basic Plan</p>
                                            <p>$ <span className='' style={{ fontSize: "42px" }}>45</span>/month</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="price_plan_info">
                                            <p>Basic Plan</p>
                                            <p>$ <span className='' style={{ fontSize: "42px" }}>45</span>/month</p>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="pricing_container">
                                            <div className="price_plan_info">
                                                <p>Basic Plan</p>
                                                <p>$ <span className='' style={{ fontSize: "42px" }}>45</span>/month</p>
                                            </div>
                                            <div className="list_price_wrapper">
                                                <ul role="list" class="pricing-plan-list">
                                                    <li>One general consultation per month</li>
                                                    <li>Annual physical exam</li>
                                                    <li>Access to online patient portal</li>
                                                    <li>Basic health screenings</li>
                                                </ul>
                                            </div>



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
