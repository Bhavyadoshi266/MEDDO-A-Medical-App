import React from 'react'

export default function All_doctors() {
    return (
        <>
            <div className="all_doctors">
                <div className="wrapper">
                    <div className="all_doctor d-flex justify-content-between align-items-center mb-5">
                        <p className='departments_headers d-flex justify-content-center align-items-center Corosel_to_aboutus_header' style={{color:"#3a6cee"}}>Doctors in our clinic</p>
                        <a href="#" className='p-0 m-0'>
                            <button className='btn_aboutus animate-text py-3 px-5'>ALL DOCTORS</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
