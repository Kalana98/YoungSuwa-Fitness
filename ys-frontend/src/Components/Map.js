import React from 'react';
import './Map.css';

const MapComponent = () => {
  return (
    <div className="map-container">
      <h2>Our Location</h2>
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9446019839474!2d-122.0842496847363!3d37.42199957982561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d7990a0f11%3A0xf1bb7d5f379dbb79!2sGoogleplex!5e0!3m2!1sen!2sus!4v1639999999999!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
