import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPanelBtn.css';

const AdminPanelBtn = () => {
  return (
    <div className='admin-panel-btn-section'>
      <div className="row">

        <div className="col-md-2">
          <NavLink to="/pending-user" className={({ isActive }) => isActive ? "active-button" : ""}>
            <button>
              Pending Users
            </button>
          </NavLink>
        </div>

        <div className="col-md-2">
          <NavLink to="/registered-user" className={({ isActive }) => isActive ? "active-button" : ""}>
            <button>
              Registered Users
            </button>
          </NavLink>
        </div>

        <div className="col-md-2">
          <NavLink to="/manage-programs" className={({ isActive }) => isActive ? "active-button" : ""}>
            <button>
              Packages
            </button>
          </NavLink>
        </div>

        <div className="col-md-2">
          <NavLink to="/manage-services-facilities" className={({ isActive }) => isActive ? "active-button" : ""}>
            <button>
              Services and Facilities
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default AdminPanelBtn;
