import React from 'react';
import All_doctors from './All_doctors';
import Corosel_to_aboutus from './Images/Corosel_to_aboutus.webp'


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
                {/* <p>{reviews.departmentname}</p> */}
                <div className="wrapper">
                    <div className="abc">
                        <div className="container">
                            <div className="row">
                                {reviews.map((item) => (
                                    <>
                                       
                                        {/* <p>{item.departmentname}</p> */}
                                    </>


                                    // <div class="card p-2 my-3 doctorcard" style={{ width: '18rem' }} >
                                    //     <img src={item.doctorimg} class="card-img-top" alt="..." />
                                    //     <div class="card-body d-flex px-0">
                                    //         <div className="col-10 ">
                                    //             <a class="card-title speciality_title">{item.departmentname}</a>
                                    //             <p class="card-text speciality_header ">{item.departmentname}</p>
                                    //         </div>
                                    //         <div className="col-2 d-flex justify-content-end abc">
                                    //             <p className='d-flex justify-content-center align-content-center my-3 doctorlinks'><i class="fa-solid fa-plus d-flex justify-content-center align-items-center"></i></p>
                                    //         </div>
                                    //         {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
                                    //     </div>
                                    // </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <All_doctors/>

            </div >
        </>
    )
}
