import React, { useState } from 'react';
import './styles/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup successful
        alert('Signup successful!');
        navigate('/login');
      } else {
        // Signup failed
        setError(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during signup');
    }
  };

  return (
    <div className="signup-container">
      <h1>Scribler<span></span></h1>
      <button className="google-signup">Continue with Google</button>
      <p>or create manually</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName"
          placeholder="First Name" 
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name" 
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          name="confirmPassword"
          placeholder="Confirm Password" 
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="continue-btn">Continue</button>
      </form>
      
      <p className="terms">
        By signing up you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>
      </p>
      <button className="login-btn" onClick={() => navigate('/login')}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default SignUp;