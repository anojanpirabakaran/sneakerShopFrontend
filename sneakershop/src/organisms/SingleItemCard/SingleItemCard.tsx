import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";

import ShoppingCartContext from "../../atoms/Context/ShoppingCartContext";
import SneakerCardContext from "../../atoms/Context/SneakerCardContext";
import "./SingleItemCard.css";

/**
 * interface for Sneaker
 */
export interface Sneaker {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  amount: number;
}

/**
 * Single item Card wiht Product
 * excutes when clicked on view options button
 */
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
      <Grid key={sneaker.id} container item md={12}>
        <Card key={sneaker.id}>
          <Grid container item md={12}>
            <Grid item md={6}>
              <CardMedia
                style={{
                  border: "3px solid #e3e3e3;",
                }}
                component="img"
                image={sneaker.image}
                alt="image"
              />
            </Grid>
            <Grid item md={6}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="sneaker_name"
              >
                {sneaker.brand + " " + sneaker.name}
              </Typography>
              <Typography variant="body2" className="sneaker_price">
                CHF {sneaker.price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "left" }}
                className="sneaker_description"
              >
                {sneaker.description}
              </Typography>

              <Button
                size="small"
                color="primary"
                variant="outlined"
                className="cardButton"
                onClick={() => addItem(sneaker)}
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
