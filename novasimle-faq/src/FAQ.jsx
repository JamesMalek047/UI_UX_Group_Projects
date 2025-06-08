import React, { useState } from 'react';

const faqs = [
  {
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is necessary. You can book an appointment directly through our form or by calling our clinic."
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Please bring your health card, any insurance information, and a list of medications you're currently taking."
  },
  {
    question: "Do you offer services for children?",
    answer: "Yes, we provide dental care for patients of all ages, including specialized pediatric dental services."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, debit, cash, and offer direct billing to most insurance providers."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-wrapper">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
