import React from 'react';
import { Link } from 'react-router-dom';
import './styles/FeaturePopup.css';

const FeaturePopup = ({ isPopupOpen, closePopup }) => {
  return (
    <div className={isPopupOpen ? "feature-popup show" : "feature-popup"}>
      <div className="feature-item" onClick={closePopup}>
        <Link to="/todo-list">
          <h3>To-Do List</h3>
          <p>Organize tasks efficiently and boost your productivity.</p>
        </Link>
      </div>
      <div className="feature-item" onClick={closePopup}>
        <Link to="/quiz-maker">
          <h3>Quiz Maker</h3>
          <p>Create quizzes to test and enhance your knowledge.</p>
        </Link>
      </div>
      <div className="feature-item" onClick={closePopup}>
        <Link to="/notepad">
          <h3>Notepad</h3>
          <p>Take quick notes and organize your thoughts.</p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturePopup;
