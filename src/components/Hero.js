import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Enhance Your Learning Journey</h1>
      <p>
        Explore insightful study blogs, interactive quizzes, and a smart to-do list to stay organized and productive.
      </p>
      <div className="hero-buttons">
        <button className="learn-more" onClick={() => navigate('/signup')}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
