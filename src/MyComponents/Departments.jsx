import React from 'react';
import dermatology from './Images/dermatology.jpg';
import hemotology from './Images/hematology.jpg';
import pulmonology from './Images/pulmonology.jpg';
import pediatrics from './Images/pediatrics.jpg';
import cardiology from './Images/cardiology.jpg';
import nephrology from './Images/nephorology.jpg';

export default function Departments() {
  const items = [
    {
      id: 1,
      departmentsname: "Dermatology",
      departmentimg: dermatology,
    },
    {
      id: 2,
      departmentsname: "Hematology",
      departmentimg: hemotology,
    }, 
    {
      id: 3,
      departmentsname: "Pulmonology",
      departmentimg: pulmonology,
    }, 
    {
      id: 4,
      departmentsname: "Pediatrics",
      departmentimg: pediatrics,
    }, 
    {
      id: 5,
      departmentsname: "Cardiology",
      departmentimg: cardiology,
    }, 
    {
      id: 6,
      departmentsname: "Nephrology",
      departmentimg: nephrology,
    },
  ];

  return (
    <div className="departments">
      <div className="wrapper">
        <div className="departments_headers d-flex justify-content-between align-items-center mb-5">
          <p className='departments_headers d-flex justify-content-center align-items-center Corosel_to_aboutus_header'>Medical departments</p>
          <a href="#" className='p-0 m-0'>
            <button className='btn_appointment animate-text py-3 px-5'>VIEW MORE</button>
          </a>
        </div>
        <div className="departments_imgs">
          <div className="container flow-up px-0">
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4 text-start">
                  <div className="card departments_body">
                    <img src={item.departmentimg} alt={item.departmentsname} className="img-fluid departments_img" />
                    <p className='department_name'>
                      <a href="#" className='departmentsnamelink'>{item.departmentsname}</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
