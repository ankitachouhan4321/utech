
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
                <div className="uh-faq-wrap">

                    <div className="uh-section-tag">
                        <span className="uh-dot"></span>
                        <span className="uh-section-number">05</span>
                        <span className="uh-section-text">FAQs</span>
                    </div>

                    <h2>
                        Frequently Asked Questions
                    </h2>

                    <div className="uh-faq-list">

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
            </div>
        </section>
    );
};

export default UTechFAQ;
