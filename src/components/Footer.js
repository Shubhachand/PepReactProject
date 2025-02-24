import React from 'react';
import './styles//Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Scribler. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
