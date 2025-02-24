import React from "react";
import { Link } from "react-router-dom";
import "./styles/Features.css";
import { FaBlog, FaQuestionCircle, FaTasks } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <h2>Enhance Your Productivity with Our Tools</h2>
      <div className="feature-cards">
        <Link to="/quizes" className="feature">
          <FaQuestionCircle className="feature-icon" />
          <h3>Quiz</h3>
          <p>
            Use auto-generated quizzes to put your new knowledge to use and
            improve your retention.
          </p>
        </Link>
        <Link to="/todo-list" className="feature">
          <FaTasks className="feature-icon" />
          <h3>To-Do List</h3>
          <p>
            Organize tasks efficiently and boost your productivity with our
            to-do list tool.
          </p>
        </Link>
        <Link to="/blogs" className="feature">
          <FaBlog className="feature-icon" />
          <h3>Blogs</h3>
          <p>Read blogs and gain knowledge to stay updated and informed.</p>
        </Link>
      </div>
    </section>
  );
};

export default Features;
