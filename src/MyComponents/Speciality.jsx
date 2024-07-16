import React from 'react';
import speciality from './Images/speciality.webp';

export default function Speciality() {
    const items = [
        {
            id: 1,
            speciality_name: 'Medical consultations',
            about_speciality: "We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community."
        },
        {
            id: 2,
            speciality_name: 'Telemedicine services',
            about_speciality: "We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community."
        }, {
            id: 3,
            speciality_name: 'Geriatric care',
            about_speciality: "We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community."
        }, {
            id: 4,
            speciality_name: 'Dermatological treatment',
            about_speciality: "We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community."
        }, {
            id: 5,
            speciality_name: 'Health screenings',
            about_speciality: "We are dedicated to providing a comprehensive range of medical services designed to meet the diverse healthcare needs of our community."
        }
    ];

    return (
        <>
            <div className="speciality text-center py-4 ">
                <div className="wrapper">
                    <p className="speciality_header m-0">WHY CHOOSE US</p>
                    <p className="speciality_headertext pb-5 m-0">What’s our speciality</p>
                    <div className="container flow-up px-0">
                        <div className="row">
                            {items.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <div className="col-12 col-md-6 col-lg-4 mb-4 text-start">
                                        <div className="card h-100 p-4 speciality_body">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="#" className='speciality_title'>{item.speciality_name}</a>
                                                </h5>
                                                <p className="card-text speciality_text">{item.about_speciality}</p>
                                                <a href="#" className="card-link speciality_readmore">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    {index === 0 && (
                                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                                            <img src={speciality} alt="Special Image" className="img-fluid speciality_img" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
