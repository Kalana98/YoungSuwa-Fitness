// src/Components/RegistrationPrompt.js
import React from 'react';
import './UserRegPrompt.css'; // Ensure you create this CSS file for styling
import { Link } from 'react-router-dom';

const UserRegPrompt = () => {
  return (
    <div className="registration-prompt">
      <h1> Get Your Fitness Potential! </h1>
      <p>
        Ready to take your fitness journey to the next level?  Don’t miss out on exclusive benefits and personalized training plans tailored just for you! By registering today, you’ll gain access to:
      </p>
      <ul>
        <li>Customized Fitness Programs 🏋️</li>
        <li>Expert Trainer Guidance 🧑‍🏫</li>
        <li>Exclusive Member-Only Discounts 💸</li>
        <li>Access to Special Workshops and Events 📅</li>
      </ul>
      <p>
        Join our community of fitness enthusiasts and start transforming your body and mind. Register now to secure your spot and take the first step towards a healthier, stronger you!
      </p>
      <Link to="/register">
        <button className="register-button"> Sign Up Now!</button>
      </Link>
      <p>Your journey to a fitter you starts here. Let’s make it happen together! </p>
    </div>
  );
};

export default UserRegPrompt;
