// src/Components/Benefits.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Benifits.css';

const benefits = [
  "Improved Heart Health: Exercise strengthens your heart, improves blood flow, and lowers the risk of heart disease.",
  "Stronger Muscles: Strength training boosts muscle mass and makes daily activities easier.",
  "Weight Control: Regular workouts help burn calories and maintain a healthy weight.",
  "Better Mood: Exercise reduces stress, lifts your mood, and helps with anxiety and depression.",
  "More Flexibility: Stretching and strength exercises improve flexibility and balance, reducing injury risks."
];

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="benefits-section" ref={ref}>
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="benefit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
        >
          <p>{benefit}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Benefits;
