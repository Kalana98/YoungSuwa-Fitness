import React, { useState, useEffect } from 'react'
import './ServiceFacilities.css'
import axios from 'axios';

const ServiceFacilities = () => {

  const [services, setServices] = useState([]);

  const fetchAllFacilities = async () => {
    try{
        const response = await axios.get('http://localhost:8080/api/v1/facilities/getAllFacilities');
        setServices(response.data)
    }catch(error){
        console.error("Error Fetching data", error);
    }
}

useEffect(() => {
    fetchAllFacilities();
}, []);


  return (
    <div className='service-section'>
      <div className="service-banner">

      </div>
      <div className="service-row">
      {services.map(sf => (
        <div key={sf.facilityID} className="service-card">
          <h2>{sf.facilityTitle}</h2>
          <p>{sf.facilityDescription} </p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ServiceFacilities
