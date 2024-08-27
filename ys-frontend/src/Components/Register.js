import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import './Register.css'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
  });

  const validateFields = () => {
    const {name , email, contactNo, address} = user
    if(!name.trim() || !email.trim() || !contactNo.trim() || !address.trim()){
      alert("You should fill all the fields")
      return false;
    }else{
      return true;
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      if (!validateFields()) return;
      const response = await axios.post('http://localhost:8080/api/v1/user/register', user);
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
    <div className="register-com-section">
      <Form className='mt-5'> 
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="name" value={user.name} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="email" value={user.email} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contactNo" placeholder="contact number" value={user.contactNo} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="address" value={user.address} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Form>
       
    </div>
  );
};

export default Register;
