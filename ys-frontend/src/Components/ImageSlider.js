import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const imageStyle = {
  height: '800px', // Adjust height as needed
  objectFit: 'cover' // Ensures the image covers the area without stretching
};



const ImageSlider = () => {
    
    
  return (
    <Carousel interval={3000} > {/* 3000 milliseconds = 3 seconds */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={imageStyle}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
