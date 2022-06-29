import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import AddIcon from "@mui/icons-material/Add";

import "./ItemCard.css";
//import { SearchBar } from "../../atoms/SearchBar/SearchBar";

export interface Sneaker {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  brand: string;
}

export const addedCartItems: Sneaker[] = [];

const addItems = (sneaker: Sneaker) => {
  addedCartItems.push(sneaker);
  console.log(sneaker.brand);
  return sneaker;
};

export default function ItemCard() {
  const [data, setData] = useState<Sneaker[]>([]);

  const getSneakerData = () => {
    ProductService.getAll()
      .then((res: { data: React.SetStateAction<Sneaker[]> }) => {
        setData(res.data);
      })
      .catch((err: any) => {});
  };

  useEffect(() => {
    getSneakerData();
  }, []);

  return (
    <>
      <Grid container item xs={12}>
        {data &&
          data.map((sneaker) => (
            <Grid container item md={3} sm={12}>
              <Card
                sx={{
                  maxWidth: 280,
                  minWidth: 280,
                  margin: "auto",
                  marginBottom: "5vh",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={sneaker.image}
                    alt="green iguana"
                    sx={{ height: "auto" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="cardText"
                    >
                      {sneaker.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="cardText"
                    >
                      {sneaker.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    className="cardButton"
                  >
                    View options
                  </Button>
                  <IconButton onClick={() => addItems(sneaker)}>
                    <Tooltip title="Add to Cart">
                      <AddIcon className="addCartButton"></AddIcon>
                    </Tooltip>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
