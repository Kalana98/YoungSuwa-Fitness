import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_95hbcen', // Replace with your EmailJS service ID
      'template_4vfurhh', // Replace with your EmailJS template ID
      formData,
      'bZOtagDSdK2Rm8Eyk' // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Feedback sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send feedback. Please try again later.');
    });
  };

  return (
    <div className="feedback-container">
      <h2>Send Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
