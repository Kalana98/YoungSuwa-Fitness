import './AdminPanel.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminPanel = () => {

  return (
    <div className='admin-panel-section'>
      
      <div className="admin-panel-title">
        <h1>Admin Panel</h1>
      </div>

      <div className="row">

          <div className="col-md-3">
            <Link to="/pending-user">
              <button>Pending Users</button>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/registered-user">
              <button>Registered Users</button>
            </Link>
          </div>

      </div>

      <div className="row">

          <div className="col-md-3">
            <Link to="/manage-programs">
               <button>Packages</button>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/manage-services-facilities">
                <button>Services and Facilities</button>
            </Link>
          </div>

      </div>
      
    </div>
  )
}

export default AdminPanel
