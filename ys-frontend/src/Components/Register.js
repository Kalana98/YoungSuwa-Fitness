import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Use full backend URL for the API request
      const response = await axios.post('http://localhost:8080/api/v1/user/register', user);

      // Show success message
      alert(response.data);

      // Optionally, reset the form after successful submission
      setUser({
        name: '',
        email: '',
        contactNo: '',
        address: '',
      });
    } catch (error) {
      // Log and handle the error
      console.error('There was an error registering the user:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNo"
          placeholder="Contact Number"
          value={user.contactNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
