import React, { useEffect, useRef } from 'react';
import './styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = testimonialsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        testimonialsRef.current.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="testimonials" ref={testimonialsRef}>
      <h2>Unlock Your Potential with Explora's Innovative Learning Solutions</h2>
      <p>"Thanks to Explora, I can study smarter, not harder. My grades have improved significantly!"</p>
      <p>- Michael Smith, High Schooler</p>
    </section>
  );
};

export default Testimonials;