
import React, { useState } from "react";

const faqData = [
    {
        question: "What hydraulic products does U-Tech Hydraulic offer?",
        answer:
            "U-Tech Hydraulic offers hydraulic power packs, hydraulic cylinders, hydraulic presses, baling presses, and other hydraulic equipment for different industrial applications."
    },
    {
        question: "Can you provide customized hydraulic solutions?",
        answer:
            "We discuss your machine specifications, load requirements, operating conditions, and application needs to help identify suitable hydraulic solutions."
    },
    {
        question: "What information is required to get a quotation?",
        answer:
            "Share the product name, required quantity, technical specifications, operating requirements, and delivery location. Drawings or reference images can also help us understand your needs."
    },
    {
        question: "Which industries use your hydraulic equipment?",
        answer:
            "Our hydraulic products are suitable for applications in manufacturing, automotive, construction, material handling, metal processing, recycling, and packaging industries."
    },
    {
        question: "How can I place an order with U-Tech Hydraulic?",
        answer:
            "You can contact our team with your product requirements. We will discuss the specifications, availability, pricing, and order details before proceeding."
    },
    {
        question: "Do you provide technical support for hydraulic products?",
        answer:
            "Our team can assist with product information, technical specifications, and selection guidance. For specific service or maintenance requirements, please contact us directly."
    }
];

const UTechFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="uh-faq-section">
            <div className="container">
                <div class="row align-items-center">
                    <div className="uh-faq-wrap col-lg-6">

                        <div className="uh-section-tag">

                            <span className="sub-heading"> FAQs</span>
                        </div>

                        <h2 className="heading heading-dark">
                            Frequently Asked Questions
                        </h2>


                        <div className="uh-faq-list" data-aos="fade-right">

                            {faqData.map((faq, index) => (
                                <div
                                    className={`uh-faq-item ${activeFaq === index ? "active" : ""
                                        }`}
                                    key={index}
                                >
                                    <button
                                        type="button"
                                        className="uh-faq-question"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={activeFaq === index}
                                        aria-controls={`uh-faq-answer-${index}`}
                                    >
                                        <span>{faq.question}</span>

                                        <span className="uh-faq-icon">
                                            {activeFaq === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {activeFaq === index && (
                                        <div
                                            className="uh-faq-answer"
                                            id={`uh-faq-answer-${index}`}
                                        >
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-4" data-aos="zoom-in">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.328936061964!2d77.01952307604698!3d28.67980538193079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d058371dc8289%3A0x9cfc84c1d5223dc2!2sU%20-%20TECH%20HYDRAULIC!5e0!3m2!1sen!2sin!4v1795237315212!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UTechFAQ;
