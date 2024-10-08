import React from 'react';
import doctor1 from './Images/doctor1.jpg'
import doctor2 from './Images/doctor2.jpg'
import doctor3 from './Images/doctor3.jpg'
import doctor4 from './Images/doctor4.jpg'


export default function All_doctors() {
    const doctors = [{
        id: 1,
        doctorname: 'Robert Lee',
        doctorpos: 'DERMATOLOGIST',
        doctorimg: doctor1,
    },
    {
        id: 2,
        doctorname: 'Leslie Alexander',
        doctorpos: 'CARDIOLOGIST',
        doctorimg: doctor2,
    }, {
        id: 3,
        doctorname: 'Kristin Watson',
        doctorpos: 'ORTHOPAEDIST',
        doctorimg: doctor3,
    }, {
        id: 4,
        doctorname: 'Albert Flores',
        doctorpos: 'PEDIATRICIAN',
        doctorimg: doctor4,
    },]

    return (
        <>
            <div className="all_doctors">
                <div className="wrapper">
                    <div className="all_doctor d-flex justify-content-between align-items-center mb-5">
                        <p className='d-flex justify-content-center align-items-center Corosel_to_aboutus_header animate-text' style={{ color: "#222222",fontWeight:'500' }}>Doctors in our clinic</p>
                        <a href="#" className='p-0 m-0'>
                            <button className='btn_aboutus animate-text py-3 px-5'>ALL DOCTORS</button>
                        </a>
                    </div>
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center animate-text">
                            {doctors.map((item) => (
                                <div className="card p-2 my-3 doctorcard" style={{ width: '18rem' }} key={item.id}>
                                    <img src={item.doctorimg} className="card-img-top" alt="..." />
                                    <div className="card-body d-flex px-0">
                                        <div className="col-10 ">
                                            <a className="card-title speciality_title">{item.doctorname}</a>
                                            <p className="card-text speciality_header ">{item.doctorpos}</p>
                                        </div>
                                        <div className="col-2 d-flex justify-content-end abc">
                                            <p className='d-flex justify-content-center align-content-center my-3 doctorlinks'><i className="fa-solid fa-plus d-flex justify-content-center align-items-center adc"></i></p>
                                        </div>
                                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
