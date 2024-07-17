import React from 'react'

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
            reviewername: "nidhi",
        },
    ]
    return (
        <>
            <div className="review_corousel">
                <div className="wrapper">
                    <div className="container flow-up px-0">
                        <div className="row">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">

                                    {/* {reviews.map((reviews) => (
                                        <div key={reviews.id} className="col-12 text-center">
                                            <div class="carousel-item active ">
                                                <p>{reviews.reviewername}</p>
                                            </div>
                                           
                                            <button class="carousel-control-prev" style={{ color: "red" }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true" style={{ color: "red" }}></span>
                                                <span class="visually-hidden" style={{ color: "red" }}>Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>

                                        </div>
                                    ))} */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
