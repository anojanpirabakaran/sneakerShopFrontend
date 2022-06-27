import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";

import "./ItemCard.css";
import { SearchBar } from "../../atoms/SearchBar/SearchBar";

interface Sneaker {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  brand: string;
}

export default function ItemCard() {
  const [data, setData] = useState<Sneaker[]>([]);

  const getSneakerData = () => {
    ProductService.getAll()
      .then((res: { data: React.SetStateAction<Sneaker[]> }) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSneakerData();
  }, []);

  return (
    <>
      <Box>
        {/* <SearchBar
          setFilteredRows={setData}
          rows={data}
          filterAfter={["price", "brand", "name"]}
        ></SearchBar> */}

        {data &&
          data.map((sneaker) => (
            <Card sx={{ maxWidth: 280, minWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={sneaker.image}
                  alt="green iguana"
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
              </CardActions>
            </Card>
          ))}
      </Box>
    </>
  );
}
