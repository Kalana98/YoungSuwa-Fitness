import React from 'react'
import './PackageIntro.css';
import { Link } from 'react-router-dom';

const PackagesIntro = () => {
  return (
    <div className='packages'>
      <h1>Ready for a Transformation? <br /> Click to Discover Our Tailored Packages!</h1>
      <Link to="/packages">
        <button className="navigate-button">Click here</button>
      </Link>
    </div>
  )
}

export default PackagesIntro
