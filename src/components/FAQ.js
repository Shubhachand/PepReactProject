import React from 'react';
import './styles/FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <h2>FAQs</h2>
      <div className="faq-item">
        <h3>What is Scribble?</h3>
        <p>Scribble is a student study platform designed to assist students in their learning journey.</p>
      </div>
      
      <div className="faq-item">
      <h3>How does Scribble work?</h3>
      <p>Scribble uses gamification and adaptive learning techniques to help students improve their academic performance.</p>
      </div>
      
      <div className="faq-item">
      <h3>How can I access Scribble?</h3>
      <p>You can access Scribble by signing up for an account on our platform.</p>
      </div>
      </section>
      
  );
};

export default FAQ;
