import React from 'react';
import './styles//Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Scribler. All rights reserved.</p>
      <div className="footer-links">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
