import React from "react";
import MuiCarousel from "../../atoms/Carousel/Carousel";
import "./Homepage.css";
import image from "../../images/Jordan11.png"
import ItemCard from "../../organisms/ItemCard/ItemCard";
import { Paper } from "@mui/material";

export default function Homepage() {
  return (
    <>
    <img className="homeImg" src={image} alt="jordan 11" />
    <Paper elevation={0} className="paper_background">
        <h1 className="shop_title">Popular</h1>
        <ItemCard />
</Paper>
    
    
    </>
  );
}
