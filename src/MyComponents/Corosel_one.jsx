import React from 'react';
import corosel_oneone from './Images/corosel_oneone.webp'

export default function Corosel_one() {
    return (
        <>
            <div className="Corosel_one py-1">
                <div className="container">
                    <div className="row">
                        <div className="Corosel_on py-1 px-0">
                            <div className="Corosel_one_left" height={580}>
                                <p className='col-12 Corosel_one_left_header'>Committed to your wellbeing</p>
                                <p className='col-12 Corosel_one_left_text'>We take the time to understand your unique health needs and develop tailored treatment
                                    plans that promote long-term wellness. From routine check-ups to specialized treatmets.</p>
                              <a href="">  <button className='btn_appointment'>MAKE AN APPOIMENT</button></a>

                            </div>

                            <div className="Corosel_one_right">
                                <img src={corosel_oneone} alt="" height={580} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
