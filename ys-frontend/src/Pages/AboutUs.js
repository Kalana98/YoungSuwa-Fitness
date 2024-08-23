import React from 'react'
import './AboutUs.css';
import { Link } from 'react-router-dom';




const AboutUs = () => {
  return (
    <div className='about-us-section'>
      <div className="about-us-banner">
        
      </div>
      <div className="about-us-text">
          <h1>Who We Are ?</h1>

          <p>
          At YoungSuwa Fitness, we are more than just a fitness center – we are a community 
          dedicated to helping you unlock your full potential. Founded with the mission <br /> to 
          create a space where individuals from all walks of life can come together and achieve 
          their health and wellness goals, we take pride in being a hub of transformation.
          </p>
          <p>
          Our team is composed of certified fitness professionals, nutrition experts, 
          and wellness coaches, all united by a common goal: to inspire and support you 
          on your fitness journey. <br /> Whether you’re here to build strength, increase 
          flexibility, lose weight, or simply improve your overall well-being, 
          we have the tools, resources, and expertise to help you succeed.
          </p>

          <h1>Our Mission</h1>

          <p>
          Our mission is simple: to provide a welcoming, inclusive environment where 
          everyone feels empowered to pursue their fitness goals. We believe that fitness 
          is not just about <br />physical health, but about mental clarity, personal growth, 
          and building a strong, supportive community. With state-of-the-art facilities 
          and cutting-edge training techniques, <br /> we are here to guide you every step 
          of the way.


          </p>

          <h1>Our Vision</h1>
          
          <p>
          We envision a world where fitness and wellness are accessible to all. 
          By fostering a community that values inclusivity, respect, and hard work, 
          we aim to make fitness a sustainable, <br /> enjoyable part of your lifestyle. 
          Our goal is to help you not only meet your fitness goals but exceed them.
          </p>

          <h1>What We Offer ?</h1>
          <ul>
            <li>
              <p>
                <span className='bold-text'>Personalized Training :</span>
                One-on-one training with experienced coaches 
                who understand your unique fitness needs and goals.
                </p>
            </li>
            <li>
              <p>
              <span className='bold-text'>Group Classes :</span> 
              From high-intensity interval training (HIIT) to calming yoga sessions, we offer a variety of
              classes to keep you engaged and motivated.
              </p>
            </li>
            <li>
              <p>
                <span className="bold-text">Nutrition Guidance :</span>
                Fitness is more than just exercise – it’s a lifestyle. Our in-house nutrition experts are here 
                to provide personalized meal plans and <br /> dietary advice.
              </p>
            </li>
            <li>
              <p>
                <span className="bold-text">Cutting-Edge Equipment :</span>
                Our facility is equipped with the latest in fitness technology, from cardio machines to strength 
                training gear, ensuring you have <br />everything you need for an effective workout.
              </p>
            </li>
            <li>
              <p>
                <span className="bold-text">Community Events :</span>
                Fitness is better together. Join us for community workouts, wellness seminars, and social events 
                designed to bring our members closer.
              </p>
            </li>
          </ul>

          <h1>Our Values</h1>
          
          <ul>
            <li>
              <p>
                <span className="bold-text">Inclusivity :</span>
                We believe that fitness is for everyone. No matter your age, fitness level, or background, you belong here.
              </p>
            </li>
            <li>
              <p>
                <span className="bold-text">Commitment :</span>
                We are committed to helping you reach your goals, no matter how big or small. Your success is our success.
              </p>
            </li>
            <li>
              <p>
                <span className="bold-text">Empowerment : </span>
                Fitness is about more than physical strength – it's about empowering individuals to be their best selves, inside and out.
              </p>
            </li>
          </ul>

          <h1>Why Choose Us ?</h1>
          <p>
          At YoungSuwa Fitness, we understand that every fitness journey is different, and we are here to support you in every step of the way. 
          We offer a range of services, <br /> from beginner-friendly programs to advanced training regimens, and we continuously evolve to provide 
          our members with the latest in fitness trends and technology.
          </p>
          <p>
          Our members are at the heart of everything we do, and we are proud to create a space where you feel comfortable, challenged, and inspired. 
          With flexible membership options, <br /> 24/7 access, and a team that's dedicated to your success, there has never been a better time to join us.
          </p>
          <p>
          Together, let’s unlock your full potential and embrace a healthier, happier lifestyle.
          </p>
          <p>
            <i>“Fitness is not just a goal, it’s a journey. Let’s take that journey together.”</i>
          </p>
           
          <Link to="/register">
           <button className="welcomebtn">
              Join With Us
           </button>
           </Link>
        </div>
      
    </div>
  )
}

export default AboutUs
