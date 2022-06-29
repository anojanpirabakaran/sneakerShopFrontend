import { Grid, Paper } from "@mui/material";
import React from "react";
import ItemCard from "../../organisms/ItemCard/ItemCard";

import "./Shop.css";
import shopImg from "../../images/shop_img.jpg";

export default function Shop() {
  return (
    <>
      <img className="shopImg" src={shopImg} alt="jordan 1" />
      <Grid container item sm={12}>
      <Paper elevation={0} className="paper_background">
        <ItemCard />
      </Paper>
      </Grid>
    </>
  );
}
