// src/Components/CalorieCalculator.js

import React, { useState } from 'react';
import './CalorieCal.css'

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let BMR;
    if (gender === 'male') {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    switch (activityLevel) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'light':
        activityFactor = 1.375;
        break;
      case 'moderate':
        activityFactor = 1.55;
        break;
      case 'active':
        activityFactor = 1.725;
        break;
      case 'veryActive':
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const totalCalories = BMR * activityFactor;
    setCalories(totalCalories.toFixed(2));
  };

  return (
    <div className="calorie-calculator">
      <h2>Calorie Calculator</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateCalories(); }}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Activity Level:
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="active">Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      {calories && (
        <div className="result">
          <h3>Your Daily Caloric Needs:</h3>
          <p>{calories} calories</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
