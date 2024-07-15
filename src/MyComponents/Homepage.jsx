import React from 'react';
import Navbar from './Navbar';
import Corosel_one from './Corosel_one';



export default function Homepage() {
    return (
        <>
            <section className='homepage'>
                <Navbar />
                <div className="wrapper">
                    <Corosel_one/>
                </div>
            </section>


        </>
    )
}
