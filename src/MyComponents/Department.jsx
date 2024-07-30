import React from 'react';
import All_doctors from './All_doctors';
import departmentone from './Images/departmentone.jpg'
import departmenttwo from './Images/departmenttwo.jpg'
import departmentthree from './Images/departmentthree.jpg'
import departmentfour from './Images/departmentfour.jpg'
import departmentfive from './Images/departmentfive.jpg'
import departmentsix from './Images/departmentsix.jpg'


export default function Department() {

    const department = [
        {
            id: 1,
            departmentname: 'Dermatology',
            departmentdesc: 'Our dermatology department is dedicated to providing comprehensive care for all your skin, hair, and nail concerns. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmentone,
        },
        {
            id: 2,
            departmentname: 'Pediatrics',
            departmentdesc: 'We are dedicated to providing exceptional pediatric care for children from infancy through adolescence. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmenttwo,
        }, {
            id: 3,
            departmentname: 'Hematology',
            departmentdesc: 'Our hematology department is dedicated to diagnosing, treating, and managing blood disorders and diseases. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmentthree,
        }, {
            id: 4,
            departmentname: 'Cardiology',
            departmentdesc: 'Our cardiology department is dedicated to providing exceptional care for all aspects of heart health. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmentfour,
        }, {
            id: 5,
            departmentname: 'Pulmonology',
            departmentdesc: 'Our pulmonology department specializes in the diagnosis, treatment, and management of respiratory conditions. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmentfive,
        }, {
            id: 6,
            departmentname: 'Nephrology',
            departmentdesc: 'Our nephrology department is dedicated to the diagnosis, treatment, and management of kidney-related conditions. From accurate diagnoses to personalized treatment plans and ongoing support.',
            departmentimg: departmentsix,
        },
    ]

    const work_process = [
        {
            id: 1,
            processname: 'Appointment Scheduling',
            processdesc: 'Patients can easily schedule appointments through our website, mobile app, or by calling our office.',
        },
        {
            id: 2,
            processname: 'Consultation and Assessment',
            processdesc: 'Our healthcare providers review your medical history and discuss any current health concerns.',
        },
        {
            id: 3,
            processname: 'Diagnosis and Treatment Planning',
            processdesc: 'Based on the diagnosis, we develop a customized treatment plan tailored to your specific needs.',
        },
        {
            id: 4,
            processname: 'Follow-Up and Monitoring',
            processdesc: 'We provide continuous support and guidance to ensure your health improves and any concerns are promptly addressed.',
        },
    ]

    return (
        <>
            <section className='department'>

                <div className="img_department">
                    <div className="department_section_content">
                        <h1 className="p-0 textheader">Our Services</h1>
                        <p className="p-0 my-2 text-white">Medicine is a vast and dynamic field dedicated to the maintenance and restoration of health through the prevention, diagnosis, treatment.</p>
                    </div>
                </div>

                {/* <div className="wrapper">
                    <div className="department_section_card">
                        {department.map((item) => (
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.departmentname}</h5>
                                            <p class="card-text">{item.departmentdesc}</p>
                                            <a href="">READ MORE </a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                      <a href="" className='department_image_link'> <img src={item.departmentimg} class="img-fluid rounded-start department_image" alt="..." /></a> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div> */}

                <div className="wrapper">
                    <div className="container department_section_card">
                        <div className="row d_section_card">
                            {department.map((item) => (
                                <div className="col-md-12" key={item.id}>
                                    <div className="card h-100 department_card ">
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <div className="card-body  department_card_body">
                                                    <div className=" d-flex flex-column justify-content-center">
                                                        <h5 className="card-title col-12"><a href="" className='department_card_header'>{item.departmentname}</a></h5>
                                                        <p className="card-text department_card_text col-12 mb-4">{item.departmentdesc}</p>
                                                    </div>
                                                    <a href="" className='departmentreadmore '>READ MORE <i class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="" className="department_image_link">
                                                    <img src={item.departmentimg} className="img-fluid  department_image" alt={item.departmentname} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="work_process .container">
                        <div className="row ">
                            <div className="col-11 work_process_left">
                                <p className='Corosel_to_aboutus_header animate-text' style={{ color: "#222222", fontWeight: '500' }}>Our work process at Meddoc</p>
                                <p className='processdesc'>At Meddoc, we follow a comprehensive and patient-centered work process to ensure the highest quality of care.</p>
                            </div>
                        </div>
                        <div className="col-12 work_process_right">
                            {work_process.map((item) => (
                                <div className='work_process_container d-flex'>
                                    <div className="col-1 d-flex justify-content-center processno   ">
                                        <p className='processid'>{item.id}</p>
                                    </div>
                                    <div className="col-10 work_process_container_steps">
                                        <p className='processname'>{item.processname}</p>
                                        <p className='processdesc'>{item.processdesc}</p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

             

                </div>
                <All_doctors />

                {/* <div className="join_team">
                    <div className="join_team_img">
                        <div className="wrapper .container">
                            <div className="row join_team_container">
                                <div className="col-7">
                                    <p style={{fontSize:"48px",color:'#ffffff',lineHeight:'1.2em'}}>Join our Meddoc team and help make the world a better place!</p>
                                    <p className='col-9' style={{fontSize:"16px",color:'#ffffff'}}>We believe in the power of teamwork and collaboration to provide comprehensive care tailored to each individual's needs.</p>
                                </div>

                                <div className="col-12">
                                    <a href="" className='join_teamlink'>JOIN US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="join_team">
                    <div className="join_team_img">
                        <div className="wrapper container">
                            <div className="row join_team_container ">
                                <div className="col-lg-7 col-md-12 mb-3">
                                    <p style={{ fontSize: "48px", color: '#ffffff', lineHeight: '1.2em' }}>Join our Meddoc team and help make the world a better place!</p>
                                    <p className='col-lg-9' style={{ fontSize: "16px", color: '#ffffff' }}>We believe in the power of teamwork and collaboration to provide comprehensive care tailored to each individual's needs.</p>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <a href="" className='join_teamlink'>JOIN US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                


            </section>
        </>
    )
}
