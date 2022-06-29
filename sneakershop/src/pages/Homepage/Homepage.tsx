import React from "react";
import "./Homepage.css";
import image from "../../images/jordan5.jpg";
import ItemCard from "../../organisms/ItemCard/ItemCard";
import { Grid, Paper } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Homepage() {
  return (
    <>
      <img className="homeImg" src={image} alt="jordan 11" />
      <Grid container item xs={12}>
        <Paper elevation={0} className="paper_background">
          <h1 className="shop_title">Popular</h1>
          <ItemCard />
        </Paper>
      </Grid>
    </>
  );
}
