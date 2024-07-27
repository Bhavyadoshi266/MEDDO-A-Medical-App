import React from 'react'
import Navbar from './Navbar'
import department_img from './Images/department.webp'

export default function Department() {
    return (
        <>
            <section className='department'>
                <Navbar/>
                <div className="img_department">
                {/* <img src={department_img} alt="" /> */}
                </div>
                
                <div className="wrapper">
                </div>
            </section>
        </>
    )
}
