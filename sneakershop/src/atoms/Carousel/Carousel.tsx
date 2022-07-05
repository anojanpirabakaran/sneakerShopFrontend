import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/material";
import "./Carousel.css";
import CactusJack from "../../images/Cactus_Jack.png";
import Jordan1 from "../../images/Jordan1.png";
import Jordan11 from "../../images/Jordan11.png";

/**
 * A Carousel wiht 3 images which will be shown 3 seconds and then the next Image is shown
 * @returns a whole Carousel
 */
const MuiCarousel = () => {
  return (
    <Box className="carousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="img" src={CactusJack} alt="First slide" />
          <Carousel.Caption>
            <h3>Jordan 4 Travis Scott Cactus Jack</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img" src={Jordan1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Jordan 1 Low Fragment x Travis Scott</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img" src={Jordan11} alt="Third slide" />
          <Carousel.Caption>
            <h3>Jordan 11</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default MuiCarousel;
