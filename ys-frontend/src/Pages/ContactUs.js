import React from 'react'
import './ContactUs.css';
import ContactIconPanel from '../Components/ContactIconPanel'
import Map from '../Components/Map';
import FeedbackForm from '../Components/FeedbackForm';

const ContactUs = () => {
  return (
    <div className='contact-us-section'>
        <div className="contact-us-banner">

        </div>
        <div className="contact-us-text">
          <h2>Have questions or need assistance?  <br />Contact us anytime! Our team is here to help with your fitness journey. Reach out today!</h2>
         <ContactIconPanel />
          <div className="row">
            <div className="col-md-6">
            <Map />
            </div>
            <div className="col-md-6">
            <FeedbackForm />
            </div>
          </div>
       
         
        </div>
    </div>
  )
}

export default ContactUs
