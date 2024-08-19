import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import './FeedbackForm.css';
import axiosInstance from './axiosInstance';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    userId: '', // This will be set from the token
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the token to get the user ID
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        setFormData({ ...formData, userId: decodedToken.id });
      } catch (err) {
        console.error('Error decoding token:', err);
        setError('Invalid token. Please log in again.');
      }
    } else {
      setError('No token found. Please log in.');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const feedbackData = { userId: formData.userId, message: formData.message };

      const response = await axiosInstance.post('/feedback', feedbackData);

      if (response.status === 201) {
        setFormStatus('Thank you for your feedback!');
        setError(null);
        setFormData({ userId: formData.userId, message: '' });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback-form-title">We Value Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}
