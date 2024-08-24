import React from 'react'
import Register from '../Components/Register'
import axios from 'axios'
import './UserRegistration.css';

const UserRegistration = () => {
  return (
    <div className='register-section'>
      <h1>This is Registration page</h1>
      <Register />
    </div>
  )
}

export default UserRegistration
