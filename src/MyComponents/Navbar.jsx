import React from 'react';
import logo from './Images/logo.svg'
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            {/* <div className="abc"> */}
                <div className="sticky-top bg-red">
                    <div className="wrapper">
                        <nav className="navbar navbar-expand-lg py-3    ">
                            <div className="container-fluid">
                                <li className="nav-item">
                                    <a className="nav-link p-0" aria-current="page" href="#">HOMEPAGE</a>
                                </li>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item d-flex">
                                            <div className="dropdown">
                                                <a className="nav-link p-0 d-flex" href="#">
                                                    <button>ABOUT</button>
                                                    <i className="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                                </a>
                                                <div className="dropdown-content">
                                                    <li><a href="">ABOUT US </a></li>
                                                    <li><a href="">OUR DOCTORS</a></li>
                                                    <li><Link to="/price">PRICING</Link></li>
                                                    <li><a href="">APPOIMENTS</a></li>
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
                                            <a className="nav-link p-0" aria-current="page" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <div className="dropdown col-12">
                                                <a className="nav-link p-0 d-flex" href="#">
                                                    <button>ALL PAGES</button>
                                                    <i className="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                                </a>
                                                <div className="dropdown-content .container">
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
                                            </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav_contacts p-0" aria-current="page" href="#">CONTACTS US</a>
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


