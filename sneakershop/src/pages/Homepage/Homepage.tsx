import { Grid, Paper } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/jordan5.jpg";
import PopularItemCard from "../../organisms/PopularItemCard/PopularItemCard";
import "./Homepage.css";

/**
 * Homepage with Popular items and a image on top with text
 */
export default function Homepage() {
  return (
    <>
      <Grid container item xs={12}>
        <img className="homeImg" src={image} alt="jordan 11" />
        <p className="first_title">Welcome to House of Kickz</p>
        <p className="second_title">IT'S NICE TO MEET YOU</p>
      </Grid>
      <Grid container item xs={12}>
        <Paper elevation={0} className="paper_background">
          <h1 className="shop_title">Popular</h1>
          <PopularItemCard />
        </Paper>
      </Grid>
    </>
  );
}
