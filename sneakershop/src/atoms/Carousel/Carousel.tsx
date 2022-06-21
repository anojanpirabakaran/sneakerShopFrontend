import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MuiCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp5564021.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Jordan 4 Travis Scott Cactus Jack</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://www.esquireme.com/public/images/2021/08/15/https___hypebeast.com_image_2021_05_fragment-design-travis-scott-air-jordan-1-low-dm7866-140-release-info-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Jordan 1 Low Fragment x Travis Scott</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp3851869.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Jordan 11</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MuiCarousel;
