import React from 'react';
import Navbar from './Navbar';
import Corosel_one from './Corosel_one';
import Speciality from './Speciality';
import Corosel_two_aboutus from './Corosel_two_aboutus';



export default function Homepage() {
    return (
        <>
            <section className='homepage '>
                <Navbar />

                <div className="p-0" style={{ display: 'grid', gap: '3rem' }}>
                    <Corosel_one />
                    <Speciality />
                    <Corosel_two_aboutus />
                </div>
              


            </section>


        </>
    )
}
