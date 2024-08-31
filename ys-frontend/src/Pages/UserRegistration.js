import React from 'react'
import Register from '../Components/Register'
import axios from 'axios'
import './UserRegistration.css';

const UserRegistration = () => {
  return (
    <div className='register-section'>
      <div className="register-banner">

      </div>
      <div className="register-content">
        <Register />
      </div>
      
    </div>
  )
}

export default UserRegistration
