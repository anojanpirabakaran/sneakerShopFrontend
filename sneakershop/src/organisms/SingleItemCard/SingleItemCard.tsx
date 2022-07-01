import {
    Card,
    CardActionArea,
    CardActions, CardMedia,
    Grid, Typography
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";

import ShoppingCartContext from "../../atoms/Context/ShoppingCartContext";
import SneakerCardContext from "../../atoms/Context/SneakerCardContext";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import "./SingleItemCard.css";

export interface Sneaker {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  amount: number;
}

export default function SingleItemCard() {
  const { addItem } = useContext(ShoppingCartContext);
  const { sneaker } = useContext(SneakerCardContext);

  const [data, setData] = useState<Sneaker>({} as Sneaker);

  const getSneakerData = () => {
    ProductService.getById(sneaker.id)
      .then((res: { data: Sneaker }) => {
        setData(res.data);
        console.log(sneaker.id);
      })
      .catch((err: any) => {});
  };

  useEffect(() => {
    getSneakerData();
  });

  return (
    <Grid container item md={12} className="singleItemCard">
      <Grid key={sneaker.id} container item md={6}>
        <Card key={sneaker.id}>
          <CardActionArea>
            <Grid container item md={12}>
              <Grid item md={8}>
                <CardMedia
                  style={{
                    border: "3px solid #e3e3e3;",
                  }}
                  component="img"
                  image={sneaker.image}
                  alt="image"
                />
              </Grid>
              <Grid item md={4}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "left" }}
                >
                  {sneaker.brand + " " + sneaker.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sneaker.price}$
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {sneaker.description}
                </Typography>
                <Grid className="addTocart" item md={12}>
                  <CardActions>
                    <MuiButton
                      onClick={() => {
                        addItem(sneaker);
                      }}
                    >
                      Add to Cart
                    </MuiButton>
                  </CardActions>
                </Grid>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
