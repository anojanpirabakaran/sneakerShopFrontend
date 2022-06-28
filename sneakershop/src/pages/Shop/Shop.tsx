import { Paper } from "@mui/material";
import React from "react";
import ItemCard from "../../organisms/ItemCard/ItemCard";

import "./Shop.css";
import shopImg from "../../images/shop_img.jpg";

export default function Shop() {
  return (
    <>
      <div></div>
      <img className="shopImg" src={shopImg} alt="jordan 1" />
      <Paper elevation={2} className="paper_background">
        <ItemCard />
      </Paper>
    </>
  );
}
