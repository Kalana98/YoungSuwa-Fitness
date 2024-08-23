import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import './Home.css';
import Benefits from '../Components/Benifits';
import CalculatorContainer from '../Components/CalculatorContainer';
import PackagesIntro from '../Components/PackagesIntro';
import UserRegPropmpt from '../Components/UserRegPropmpt';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ImageSlider />

      <div className="welcome">
        <h1>Welcome to YoungSuwa Fitness</h1>

        <p>
        Welcome to YoungSuwa Fitness, where your journey to a healthier, stronger you begins! Our state-of-the-art 
        facility offers top-notch equipment,<br /> expert trainers, and a supportive community dedicated to helping you 
        achieve your fitness goals. Whether you’re just starting out or looking to elevate your training,<br /> we provide 
        personalized programs tailored to fit your needs. Join us and transform your fitness routine into a lifestyle 
        of vitality and well-being. <br /> Let’s work together to unlock your full potential and celebrate every 
        step of your success!
        </p>

        <Link to="/register">
        <button className="welcomebtn">
          Join With Us
        </button>
        </Link>

        
      </div>

     <div className="benifitsTitle">
        <h1>Find out exercise’s key benefits!</h1>    
    </div>       
      <Benefits />
      <PackagesIntro />
      <div className="calculatorTitle">
        <h1>Track Your Health: BMI and Calorie Calculator</h1>    
    </div> 
      <CalculatorContainer />
      <UserRegPropmpt />
      
    </div>
  )
}

export default Home
