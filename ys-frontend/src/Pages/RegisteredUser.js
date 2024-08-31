import React, { useEffect, useState } from 'react'
import './RegisteredUser.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import AdminPanelBtn from '../Components/AdminPanelBtn';

const RegisteredUser = () => {

    const [registeredUsers, setRegisteredUsers] = useState([]);// for list
    const [selectedRegUsers, setselectedRegUsers] = useState(null); //for updaetd
    //for form
    const [regEmail, setRegEmail] = useState("");
    const [regName, setRegName] = useState("");
    const [regContactNo, setRegContactNo] = useState("");
    const [regAddress, setRegAddress] = useState("");

    const selectRegUser = (regUser) => {
        setselectedRegUsers(regUser);
    }

    useEffect(() => {
        setRegEmail(selectedRegUsers?. email || "");
        setRegName(selectedRegUsers?.name || "");
        setRegContactNo(selectedRegUsers?.contactNo || "");
        setRegAddress(selectedRegUsers?.address || "");
    },[selectedRegUsers])

    const clearFields = () => {
        setRegEmail("");
        setRegName("");
        setRegContactNo("");
        setRegAddress("");
    }


    useEffect(() => {
        fetchRegisteredUsers();
    }, [])

    const fetchRegisteredUsers = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/user/get-registered-users');
            setRegisteredUsers(response.data);
        }catch(error){
            console.error("Error fetching registered users", error);
        }
    }

    const updateRegUser = async () => {
        try{
            const response = await axios.put('http://localhost:8080/api/v1/user/updateRegisterUser', {
                email : regEmail,
                name : regName,
                contactNo : regContactNo,
                address : regAddress
            });
            alert(response.data);
            fetchRegisteredUsers();
            clearFields();
        }catch(error){
            console.error(error);
        }
    }

    const deleteRegUser = async () => {
        try{
            const response = await axios.delete(`http://localhost:8080/api/v1/user/deleteRegUser/${regEmail}`);
            alert(response.data);
            fetchRegisteredUsers();
            clearFields();
        }catch(error){
            console.error(error);
        }
    }

  return (
    <div className='registered-user-section'>
        <AdminPanelBtn />
        <h1>Registered User Management</h1>
        <Form className='mt-5'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Registered User Management : Email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Registered User Management : Name" value={regName} onChange={(e) => setRegName(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Registered User Management : Contact Number" value={regContactNo} onChange={(e) => setRegContactNo(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Registered User Management : Address" value={regAddress} onChange={(e) => setRegAddress(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="success" onClick={updateRegUser}>Update</Button>{' '}
            <Button variant="danger" onClick={deleteRegUser}>Delete</Button>{' '}
            
        </Form>    
      <Table className="registered-user-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {registeredUsers.length > 0 ? (
                registeredUsers.map((rUser) => (
                    <tr key={rUser.email} onClick={() => selectRegUser(rUser)}>
                        <td>{rUser.name}</td>
                        <td>{rUser.email}</td>
                        <td>{rUser.contactNo}</td>
                        <td>{rUser.address}</td>
                    
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={5}>No Registered User to show this list</td>
                </tr>
            )

            }
        </tbody>
      </Table>
    </div>
  )
}

export default RegisteredUser
