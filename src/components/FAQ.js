import React from 'react';
import './styles/FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <h2>FAQs</h2>
      <div className="faq-item">
        <h3>What is Explora?</h3>
        <p>Explora is an AI-powered platform designed to assist students in their learning journey.</p>
      </div>
      <div className="faq-item">
        <h3>How does it work?</h3>
        <p>Explora uses AI algorithms to analyze learning patterns and provide personalized study plans.</p>
      </div>
    </section>
  );
};

export default FAQ;
