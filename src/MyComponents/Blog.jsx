import React from 'react';
import blogcard1 from './Images/footercard1.jpg';
import blogcard2 from './Images/footercard2.jpg';
import blogcard3 from './Images/footercard3.jpg';


export default function Blog
    () {
    const blogs_cards = [
        {
            id: 1,
            img: blogcard1,
            date: 'JULY 1, 2024',
            news: 'Top 5 Tips for Maintaining a Healthy Heart: Advice from Our Cardiologist'
        },
        {
            id: 2,
            img: blogcard2,
            date: 'JULY 1, 2024',
            news: 'Top 5 Tips for Maintaining a Healthy Heart: Advice from Our Cardiologist'
        },
        {
            id: 3,
            img: blogcard3,
            date: 'JULY 1, 2024',
            news: 'Top 5 Tips for Maintaining a Healthy Heart: Advice from Our Cardiologist'
        },
    ];

    return (
        <>
            <div className="blogs py-5">
                <div className="container">
                    <div className="departments_headers d-flex justify-content-between align-items-center mb-4">
                        <p className='departments_headers d-flex justify-content-center align-items-center Corosel_to_aboutus_header p-0 m-0'>
                            Medical departments
                        </p>
                        <a href="#" className='p-0 m-0'>
                            <button className='btn_appointment animate-text py-3 px-5'>VIEW MORE</button>
                        </a>
                    </div>
                    <div className="row">
                        {blogs_cards.map((item) => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4  footercard">
                                <div className="card bg-dark text-white h-100">
                                    <img src={item.img} className="card-img blogsimg" alt="..." />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <div>
                                            <p className="card-text">{item.date}</p>
                                            <h5 className="card-title">{item.news}</h5>
                                        </div>

                                        <div>
                                            <a href="" className='blogs_readmore py-3 px-5'>Read More</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
