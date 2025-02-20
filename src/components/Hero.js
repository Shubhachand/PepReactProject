import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Transform Your Learning Experience with AI</h1>
      <p>
        Discover how Explora's AI-driven tools can revolutionize your study habits and boost your academic performance.
      </p>
      <div className="hero-buttons">
        <button className="learn-more" onClick={() => navigate('/signup')}>Let's Get Started</button>
      </div>
    </section>
  );
};

export default Hero;