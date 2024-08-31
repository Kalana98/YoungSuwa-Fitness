import React, { useEffect, useState } from 'react'
import './Packages.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button} from 'react-bootstrap'



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

    const formatPrice = (price) => {
      return price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
          <p className="program-price">RS.{formatPrice(pg.price)}/=</p> {/* Use formatPrice function */}
          <Link to="/register">
            <Button variant="success" className="join-Button">Join Us</Button>
          </Link>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Packages
