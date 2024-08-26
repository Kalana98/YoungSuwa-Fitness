import React, { useEffect, useState } from 'react'
import './Packages.css'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Packages = () => {

    const [programs, setProgram] = useState([]);

    useEffect(() => {
        fetchAllPrograms();
    }, []);

    const fetchAllPrograms = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/programs/getAllPrograms');
            setProgram(response.data);
        }catch(error){
            console.error(error);
        }
    };

  return (
    <div className='package-section'>
      <div className="package-banner">

      </div>
      <div className="program-row">
      {programs.map(pg => (
        <div key={pg.programID} className="program-card">
          <h2>{pg.programName}</h2>
          <p>{pg.programDescription}</p>
          <p>{pg.duration} days</p>
          <p className="program-price">RS.{pg.price}/=</p>
          <Link to="/register">
            <button className="join-button">Join Us</button>
          </Link>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Packages
