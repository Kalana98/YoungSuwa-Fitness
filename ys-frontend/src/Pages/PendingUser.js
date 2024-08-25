import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './PendingUser.css';

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
        <h1>Pending user table</h1>
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
                                    <button onClick={() => approveUser(user.email)}>Approve</button> {""}
                                    <button onClick={() => rejectUser(user.email)}>Reject</button>
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