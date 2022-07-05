import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";

import ShoppingCartContext from "../../atoms/Context/ShoppingCartContext";
import "./PopularItemCard.css";
import SneakerCardContext from "../../atoms/Context/SneakerCardContext";
import { useNavigate } from "react-router-dom";

/**
 * interface Sneaker
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
 * PopularItemCard where the Populares items are shown
 */
export default function ItemCard() {
  const { addItem } = useContext(ShoppingCartContext);
  const { setCurrentSneaker } = useContext(SneakerCardContext);

  const navigate = useNavigate();

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

  const goToSneaker = (sneaker: Sneaker) => {
    navigate("/shop/" + sneaker.id);
    setCurrentSneaker(sneaker);
  };

  return (
    <>
      <Grid container item xs={12}>
        {data &&
          data.slice(0, 4).map((sneaker) => (
            <Grid container item md={3} sm={12} key={sneaker.id}>
              <Card
                sx={{
                  maxWidth: 280,
                  minWidth: 280,
                  margin: "auto",
                  marginBottom: "5vh",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sneaker.image}
                  alt="green iguana"
                  sx={{ height: "auto" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    className="cardText"
                  >
                    {sneaker.brand}
                  </Typography>
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
                    {sneaker.price}$
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    className="cardButton"
                    onClick={() => goToSneaker(sneaker)}
                  >
                    View options
                  </Button>
                  <IconButton
                    onClick={() => {
                      addItem(sneaker);
                    }}
                  >
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
