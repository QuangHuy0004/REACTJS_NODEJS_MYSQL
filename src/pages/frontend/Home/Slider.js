import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Style.css'; // Import CSS file

function Slide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/hero/hero-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h1 className="title_large" >2024 SUMMER</h1>
          <p>A specialist label creating luxury essentials. <br></br> Ethically crafted with an unwavering commitment to exceptional quality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/hero/hero-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h1 className="title_h1" >2024 WINTER</h1>
          <p>A specialist label creating luxury essentials.<br></br> Ethically crafted with an unwavering commitment to exceptional quality</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
