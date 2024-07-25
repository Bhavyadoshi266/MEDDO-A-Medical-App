// import React from 'react';
// import blogcard1 from './Images/footercard1.jpg';
// import blogcard2 from './Images/footercard2.jpg';
// import blogcard3 from './Images/footercard3.jpg';

// export default function Blog() {
//     const blogs_cards = [
//         {
//             id: 1,
//             img: blogcard1,
//             date: 'JULY 1, 2024',
//             news: 'Top 5 Tips for Maintaining a Healthy Heart: Advice from Our Cardiologist',
//         },
//         {
//             id: 2,
//             img: blogcard2,
//             date: 'JULY 1, 2024',
//             news: 'The Benefits of Preventive Health Screenings: Why Early Detection Matters',
//         },
//         {
//             id: 3,
//             img: blogcard3,
//             date: 'JULY 1, 2024',
//             news: 'How Telemedicine is Revolutionizing Patient Care: A Closer Look',
//         },
//     ];

//     return (
//         <>
//             <section className="blogs">
//                 <div className="wrapper">
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                         <p className='d-flex justify-content-center align-items-center Corosel_to_aboutus_header p-0 m-0'>
//                             Latest posts & news
//                         </p>
//                         <a href="#" className='p-0 m-0'>
//                             <button className='btn_blog animate-text py-3 px-5'>ALL POSTS</button>
//                         </a>
//                     </div>
//                     <div className="row">
//                         {blogs_cards.map((item) => (
//                             <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3  footercard">
//                                 <div className="card bg-transparent blog_img_container text-white h-100">
//                                     <img src={item.img} className="card-img blogsimg" alt="..." />
//                                     <div className="card-img-overlay d-flex flex-column justify-content-end">
//                                         <div className='px-4 blog_content'>
//                                             <p className="card-text">{item.date}</p>
//                                             <h5 className="card-title blog_news">{item.news}</h5>
//                                         </div>
//                                         <div className='py-4 blog_contentlink'>
//                                             <a href="" className='blogs_readmore py-3 px-5'>READ MORE</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

import React from 'react';
import blogcard1 from './Images/footercard1.jpg';
import blogcard2 from './Images/footercard2.jpg';
import blogcard3 from './Images/footercard3.jpg';
// import './Blog.css'; // Assuming you have a separate CSS file for additional styles

export default function Blog() {
    const blogs_cards = [
        {
            id: 1,
            img: blogcard1,
            date: 'JULY 1, 2024',
            news: 'Top 5 Tips for Maintaining a Healthy Heart: Advice from Our Cardiologist',
        },
        {
            id: 2,
            img: blogcard2,
            date: 'JULY 1, 2024',
            news: 'The Benefits of Preventive Health Screenings: Why Early Detection Matters',
        },
        {
            id: 3,
            img: blogcard3,
            date: 'JULY 1, 2024',
            news: 'How Telemedicine is Revolutionizing Patient Care: A Closer Look',
        },
    ];

    return (
        <>
            <section className="blogs">
                <div className="wrapper">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className='Corosel_to_aboutus_header p-0 m-0 animate-text'>
                            Latest posts & news
                        </p>
                        <a href="#" className='p-0 m-0'>
                            <button className='btn_blog animate-text py-3 px-5 animate-text'>ALL POSTS</button>
                        </a>
                    </div>
                    <div className="row">
                        {blogs_cards.map((item) => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3 blogcard animate-text">
                                <div className="card bg-transparent blog_img_container text-white h-100">
                                    <img src={item.img} className="card-img blogsimg" alt="..." />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <div className='px-4 blog_content'>
                                            <p className="card-text">{item.date}</p>
                                            <h5 className="card-title blog_news">{item.news}</h5>
                                        </div>
                                        <div className='py-4 blog_contentlink'>
                                            <a href="#" className='blogs_readmore py-3 px-5'>READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


