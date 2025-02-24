import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturePopup from './FeaturePopup';
import './styles/Navbar.css';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(prev => !prev);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <nav className="navbar">
      <div className="left-section">
        <button className="hamburger" >
          ☰
        </button>
        <div className="logo">
          <Link to="/" className="logo-text">Scribler</Link>
        </div>
      </div>

      <ul className="nav-links">
        <li className="dropdown">
          <button onClick={togglePopup} className="dropdown-button">
            Features <span className="dropdown-arrow">▼</span>
          </button>
          {isPopupOpen && <FeaturePopup isPopupOpen={isPopupOpen} closePopup={closePopup} />}
        </li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
