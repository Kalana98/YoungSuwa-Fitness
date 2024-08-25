import React, { useEffect, useState } from 'react'
import './RegisteredUser.css'
import axios from 'axios';

const RegisteredUser = () => {

    const [registeredUsers, setRegisteredUsers] = useState([]);

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

  return (
    <div className='registered-user-section'>
      <table className="registered-user-table">
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
            {registeredUsers.length > 0 ? (
                registeredUsers.map((regUser) => (
                    <tr key={regUser.email}>
                        <td>{regUser.name}</td>
                        <td>{regUser.email}</td>
                        <td>{regUser.contactNo}</td>
                        <td>{regUser.address}</td>
                        <td>
                            <button>Update</button> {""}
                            <button>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={5}>No Registered User to show this list</td>
                </tr>
            )

            }
        </tbody>
      </table>
    </div>
  )
}

export default RegisteredUser
