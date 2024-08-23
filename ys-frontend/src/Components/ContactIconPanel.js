import React from 'react';
import './ContactIconPanel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-row">
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt icon-red"></i>
                    <h3>ADDRESS</h3>
                    <p>100 | 20/5, Galle ROAD, Balapitiya</p>
                </div>

                <div className="contact-item">
                    <i className="fas fa-phone-alt icon-red"></i>
                    <h3>PHONE</h3>
                    <p>+94763996272<br />+94112348392</p>
                </div>

                <div className="contact-item">
                    <i className="fas fa-envelope icon-red"></i>
                    <h3>EMAIL</h3>
                    <p>info@youngsuwafitness.lk</p>
                </div>

                <div className="contact-item">
                    <i className="fas fa-coffee icon-red"></i>
                    <h3>FOLLOW US</h3>
                        <div className="social-icons">
                            <a href="/www.facebook.com" className="social-icon"><i className="fab fa-facebook"></i></a>
                            <a href="/www.whatsapp.com" className="social-icon"><i className="fab fa-whatsapp"></i></a>
                            <a href="/www.tiktok.com" className="social-icon"><i className="fab fa-tiktok"></i></a>
                            <a href="/www.google.com" className="social-icon"><i className="fab fa-google"></i></a>
                        </div>
                </div>
      </div>
    </div>
  );
};

export default ContactUs;
