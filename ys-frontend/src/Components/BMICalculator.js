// src/Components/BMICalculator.js

import React, { useState } from 'react';
import './BMICalculator.css'; // Ensure this path is correct

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2)); // Round to 2 decimal places

      let bmiCategory = '';
      if (calculatedBmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        bmiCategory = 'Normal weight';
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obesity';
      }
      setCategory(bmiCategory);
    } else {
      setBmi(null);
      setCategory('');
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
