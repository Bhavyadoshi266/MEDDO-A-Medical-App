import React from 'react'

export default function FAQ() {
    const faq = [
        {
            id: 1,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
        {
            id: 2,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
        {
            id: 3,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
        {
            id: 4,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
        {
            id: 5,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
        {
            id: 6,
            question: 'What should I expect during a routine check-up?',
            answer: 'During a routine check-up, your doctor will review your medical history, perform a physical examination, and discuss any concerns or symptoms you may have. Screening tests or vaccinations may also be recommended based on your age and health status.',
        },
    ]
    return (
        <>
            <section className='faq text-center'>
                <div className="wrapper">
                    <p className='p-0 m-0' style={{ color: '#3a6cee', fontWeight: '400' }}>FAQ</p>
                    <p className='' style={{ fontSize: "48px", color: '#222222', fontWeight: '500' }}>Answers to common questions</p>

                    <div className="faq_container .container">
                        <div className="row">
                            {faq.map((item) => (
                                <div className='que_ans_container ' key={item.id}>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                               {item.answer}
                                                {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                 </div> 
                            ))}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
