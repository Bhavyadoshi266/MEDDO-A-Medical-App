import React from 'react';
import All_doctors from './All_doctors';
import Corosel_to_aboutus from './Images/Corosel_to_aboutus.webp'
import { Carousel } from 'react-bootstrap';

export default function Review_corousel() {
    const reviews = [
        {
            id: 1,
            departmentname: "TESTIMONIALS",
            reviewtext: "“Thanks to Dr. Lee, I finally feel like my health is under control. The medicine services were a game-changer during a busy period in my life, allowing me to get the care I needed without missing a beat. Highly recommend for anyone looking for flexible and comprehensive healthcare!”",
            reviewername: "bhavya",
        },
        {
            id: 2,
            departmentname: "TESTIMONIALS",
            reviewtext: "“Thanks to Dr. Lee, I finally feel like my health is under control. The medicine services were a game-changer during a busy period in my life, allowing me to get the care I needed without missing a beat. Highly recommend for anyone looking for flexible and comprehensive healthcare!”",
            reviewername: "neet",
        }, {
            id: 3,
            departmentname: "TESTIMONIALS",
            reviewtext: "“Thanks to Dr. Lee, I finally feel like my health is under control. The medicine services were a game-changer during a busy period in my life, allowing me to get the care I needed without missing a beat. Highly recommend for anyone looking for flexible and comprehensive healthcare!”",
            reviewername: "deep",
        }, {
            id: 4,
            departmentname: "TESTIMONIALS",
            reviewtext: "“Thanks to Dr. Lee, I finally feel like my health is under control. The medicine services were a game-changer during a busy period in my life, allowing me to get the care I needed without missing a beat. Highly recommend for anyone looking for flexible and comprehensive healthcare!”",
            reviewername: "shyam",
        },
    ]
    return (
        <>
            <div className="review_corousel">
                <div className="wrapper">
                    <div className="abc">
                    <Carousel>
                        {reviews.map((item, index) => (
                            <Carousel.Item key={index}>
                                <div className="carousel-content text-center review_corousel_container">
                                    <h3 className="carousel-header">{item.departmentname}</h3>
                                    <p className="carousel-writer"> {item.reviewtext}</p>
                                    <p className="carousel-author"> {item.reviewername}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </div>

                </div>
                <All_doctors />
            </div >
        </>
    )
}
