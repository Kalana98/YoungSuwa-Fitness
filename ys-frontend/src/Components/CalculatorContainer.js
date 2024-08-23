// src/Components/CalculatorContainer.js

import React from 'react';
import BMICalculator from './BMICalculator';
import CalorieCal from './CalorieCal';
import './CalculatorContainer.css'; // Optional: add your styles

const CalculatorContainer = () => {
  return (
    <div className="calculator-container container">
      <div className="row">
        <div className="col-md-6">
          <BMICalculator />
        </div>
        <div className="col-md-6">
          <CalorieCal />
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
