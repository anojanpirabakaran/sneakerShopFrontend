import React from "react";
import MuiCarousel from "../../atoms/Carousel/Carousel";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <MuiCarousel />
      <MuiButton className="buyButton">Buy now</MuiButton>
    </>
  );
}
