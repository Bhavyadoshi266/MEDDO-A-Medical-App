import React from 'react';
import logo from './Images/logo.svg'
import { Link, Outlet } from 'react-router-dom';

export default function Navbar({onCartClick}) {
    return (
        <>
            {/* <div className="abc"> */}
            <div className="sticky-top bg-red">
                <div className="wrapper">
                    <nav className="navbar navbar-expand-lg py-3    ">
                        <div className="container-fluid">
                            <li className="nav-item">
                                <Link className="nav-link p-0" aria-current="page" to="/homepage">HOMEPAGE</Link>
                            </li>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item d-flex">
                                        <div className="dropdown">
                                            <a className="nav-link p-0 d-flex" href="#">
                                                <button>ABOUT</button>
                                                <i className="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                            </a>
                                            <div className="dropdown-content dropdown_about">
                                                <li><a href="">ABOUT US </a></li>
                                                <li><a href="">OUR DOCTORS</a></li>
                                                <li><Link to="/price">PRICING</Link></li>
                                                <li><Link to="/contact_us">APPOIMENTS</Link></li>
                                                <li><a href="">TESTIMONIALS</a></li>
                                                <li><a href="">FAQ</a></li>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link p-0" aria-current="page" to="services">SERVICES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link p-0" aria-current="page" to="department">DEPARTMENT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-0" aria-current="page" href="#">DOCTORS</a>
                                    </li>
                                </ul>
                                <ul className="d-flex p-0 m-0 me-auto mb-2 mb-lg-0 navbar-nav">
                                    <li className="logo">
                                        <img src={logo} alt="" />
                                    </li>
                                </ul>
                                <ul className='d-flex mb-2 mb-lg-0 navbar-nav'>
                                    <li className="nav-item">
                                        <Link lassName="nav-link p-0" aria-current="page" to="/ " onClick={onCartClick}><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </li>
                                    <li className="nav-item d-flex">
                                        <div className="dropdown col-12">
                                            <a className="nav-link p-0 d-flex" href="#">
                                                <button>ALL PAGES</button>
                                                <i className="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                            </a>
                                            {/* <div className="dropdown-content .container">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <li><a href="">ABOUT US </a></li>
                                                        <li><a href="">OUR DOCTORS</a></li>
                                                        <li><a href="">PRICING</a></li>
                                                        <li><a href="">APPOIMENTS</a></li>
                                                        <li><a href="">TESTIMONIALS</a></li>
                                                        <li><a href="">FAQ</a></li>
                                                    </div>
                                                    <div className="col-4">
                                                        <li><a href="">ABOUT US </a></li>
                                                        <li><a href="">OUR DOCTORS</a></li>
                                                        <li><a href="">PRICING</a></li>
                                                        <li><a href="">APPOIMENTS</a></li>
                                                        <li><a href="">TESTIMONIALS</a></li>
                                                        <li><a href="">FAQ</a></li>
                                                    </div>
                                                    <div className="col-4">
                                                        <li><a href="">ABOUT US </a></li>
                                                        <li><a href="">OUR DOCTORS</a></li>
                                                        <li><a href="">PRICING</a></li>
                                                        <li><a href="">APPOIMENTS</a></li>
                                                        <li><a href="">TESTIMONIALS</a></li>
                                                        <li><a href="">FAQ</a></li>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <div className="dropdown"> */}

                                            <div className="dropdown-content container dropdown_allpage">
                                                <div className="row">
                                                    <div className="col-4  m-0">
                                                        <li><a href="">HOME</a></li>
                                                        <li><a href="">ABOUT US</a></li>
                                                        <li><a href="">OUR DOCTORS</a></li>
                                                        <li><a href="">DOCTORS DETAILS</a></li>
                                                        <li><a href="">PRICING</a></li>
                                                        <li><a href="">DEPARTMENTS</a></li>
                                                        <li><a href="">WORKING HOURS</a></li>

                                                    </div>
                                                    <div className="col-4 p-0 m-0">
                                                        <li><a href="">DEPARTMENTS DETAILS</a></li>
                                                        <li><a href="">SERVICES</a></li>
                                                        <li><a href="">SERVICES DETAILS</a></li>
                                                        <li><a href="">APPOINTMENTS</a></li>
                                                        <li><a href="">TESTIMONIALS</a></li>
                                                        <li><a href="">CAREER</a></li>
                                                        <li><a href="">CAREER DETAILS</a></li>
                                                    </div>
                                                    <div className="col-4 p-0 m-0">
                                                        <li><a href="">SCHEDULES</a></li>
                                                        <li><a href="">FAQ</a></li>
                                                        <li><a href="">NEWS</a></li>
                                                        <li><a href="">NEWS DETAILS</a></li>
                                                        <li><Link to="/shop">SHOP</Link></li>
                                                        <li><a href="">PRODUCT DETAILS</a></li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav_contacts p-0" aria-current="page" to="/contact_us">CONTACTS US</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* </div> */}

            <Outlet />
        </>
    )
}


