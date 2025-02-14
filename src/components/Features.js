import React from 'react';
import './styles/Features.css';
// Import icons from a library like FontAwesome or use SVGs
import { FaQuestionCircle, FaTasks, FaVideo } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features">
      <h2>Enhance Your Productivity with Our Tools</h2>
      <div className="feature-cards">
        <div className="feature">
          <FaQuestionCircle className="feature-icon" />
          <h3>Create Quiz</h3>
          <p>Use auto-generated quizzes to put your new knowledge to use and improve your retention.</p>
        </div>
        <div className="feature">
          <FaTasks className="feature-icon" />
          <h3>To-Do List</h3>
          <p>Organize tasks efficiently and boost your productivity with our to-do list tool.</p>
        </div>
        <div className="feature">
          <FaVideo className="feature-icon" />
          <h3>Vlogs</h3>
          <p>Create and share video blogs to connect with your audience and share your story.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;