import { Grid, Paper } from "@mui/material";
import React from "react";
import ItemCard from "../../organisms/ItemCard/ItemCard";

import "./Shop.css";
import shopImg from "../../images/Jordan11.png";

export default function Shop() {
  return (
    <>
    <Grid container item xs={12}>
      <img className="shopImg" src={shopImg} alt="jordan 11" />
      <p className="first_title">"Buy your sneakers"</p>
      <p className="second_title">SHOP</p>
      </Grid>
    <p className="second_title">ABOUT</p>
      <Grid container item sm={12}>
      <Paper elevation={0} className="paper_background">
        <h1 className="shop_title">All Product</h1>
        <ItemCard />
      </Paper>
      </Grid>
    </>
  );
}
