import React from 'react';
import './styles//Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Explora. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
        <button className="link-button" onClick={() => window.location.href='/contact-us'}>Contact Us</button>
      </div>
    </footer>
  );
};

export default Footer;
