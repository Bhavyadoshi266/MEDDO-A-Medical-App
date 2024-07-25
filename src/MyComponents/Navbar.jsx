import React from 'react';
import logo from './Images/logo.svg'

export default function Navbar() {
    return (
        <>
            <div className="navbar_sticky mb-4">
                <div className="wrapper">
                    <nav class="navbar navbar-expand-lg py-3">
                        <div class="container-fluid">
                            <li class="nav-item">
                                <a class="nav-link p-0" aria-current="page" href="#">HOMEPAGE</a>
                            </li>
                            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item d-flex">
                                        <div class="dropdown">
                                            <a class="nav-link p-0 d-flex" href="#">
                                                <button>ABOUT</button>
                                                <i class="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                            </a>
                                            <div class="dropdown-content">
                                                <li><a href="">ABOUT US </a></li>
                                                <li><a href="">OUR DOCTORS</a></li>
                                                <li><a href="">PRICING</a></li>
                                                <li><a href="">APPOIMENTS</a></li>
                                                <li><a href="">TESTIMONIALS</a></li>
                                                <li><a href="">FAQ</a></li>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link p-0" aria-current="page" href="#">SERVICES</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link p-0" aria-current="page" href="#">DEPARTMENT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link p-0" aria-current="page" href="#">DOCTORS</a>
                                    </li>
                                </ul>
                                <ul class="d-flex p-0 m-0 me-auto mb-2 mb-lg-0 navbar-nav">
                                    <li className="logo">
                                        <img src={logo} alt="" />
                                    </li>
                                </ul>
                                <ul className='d-flex mb-2 mb-lg-0 navbar-nav'>
                                    <li class="nav-item">
                                        <a class="nav-link p-0" aria-current="page" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <div class="dropdown col-12">
                                            <a class="nav-link p-0 d-flex" href="#">
                                                <button>ALL PAGES</button>
                                                <i class="fa-solid fa-caret-down p-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', cursor: 'pointer' }}></i>
                                            </a>
                                            {/* <div class="dropdown-content .container">
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
                                           
                                        </div>


                                    </li>
                                    <li class="nav-item">
                                        <a class="nav_contacts p-0" aria-current="page" href="#">CONTACTS US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


