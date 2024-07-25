import React from 'react';
import Navbar from './Navbar';
import Corosel_one from './Corosel_one';
import Speciality from './Speciality';
import Corosel_two_aboutus from './Corosel_two_aboutus';
import Innovation from './Innovation';
import Departments from './Departments';
import Review_corousel from './Review_corousel';
import All_doctors from './All_doctors';
import Blog from './Blog';
import Footer from './Footer';

export default function Homepage() {
    return (
        <>
            <section className='homepage m-0 p-0'>
                <Navbar />

                <div className="p-0">
                    <Corosel_one />
                    <Speciality />
                    <Corosel_two_aboutus />
                    {/* <Innovation/> */}
                    {/* <Review_corousel/> */}
                    <All_doctors/>
                    <Blog/>
                   
                </div>
                <Footer/>
               
            </section>
            


        </>
    )
}
