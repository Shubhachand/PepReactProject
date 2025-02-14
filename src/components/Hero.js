import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Transform Your Learning Experience with AI</h1>
      <p>
        Discover how Explora's AI-driven tools can revolutionize your study habits and boost your academic performance.
      </p>
      <div className="hero-buttons">
        <button className="learn-more">Lets Get started</button>
        {/* <button className="sign-up">Sign Up</button> */}
      </div>
    </section>
  );
};

export default Hero;
