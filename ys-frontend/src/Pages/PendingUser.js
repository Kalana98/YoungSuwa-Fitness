import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './PendingUser.css';
import AdminPanelBtn from '../Components/AdminPanelBtn';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'

const PendingUser = () => {

    const [pendingUsers, setPendingUsers] = useState([]);

    useEffect(() => {
        fetchPendingUsers();
    }, []);

    const fetchPendingUsers = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/user/get-pending-users');
            setPendingUsers(response.data);
        }catch(error){
            console.error("Error fetching pending users", error);
        }
    };

    const approveUser = async (email) => {
        try{
            const response = await axios.post(`http://localhost:8080/api/v1/user/approve-user/${email}`);
            setPendingUsers(Array.isArray(response.data) ? response.data : []);
            fetchPendingUsers();
            alert(response.data);
        }catch(error){
            console.error("Error approving user", error);
        }
    };

    const rejectUser = async (email) => {
        try{
            const response = await axios.delete(`http://localhost:8080/api/v1/user/reject-user/${email}`);
            setPendingUsers(Array.isArray(response.data) ? response.data : []);
            fetchPendingUsers();
            alert(response.data);
        }catch(error){
            console.error("Error rejecting user", error);
        }
    };

    

  return (
    <div className='pending-user-section'>
        <AdminPanelBtn />
        <h1>Pending User Management</h1>
        <table className='pending-user-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {pendingUsers.length > 0 ? (
                        pendingUsers.map((user) => (
                            <tr key={user.email}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contactNo}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Button  variant="success" onClick={() => approveUser(user.email)}>Approve</Button> {""}
                                    <Button variant="danger" onClick={() => rejectUser(user.email)}>Reject</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No pending users found</td>
                        </tr>
                    )

                    }
                </tbody>
        </table>
      
    </div>
  )
}

export default PendingUser
//my code