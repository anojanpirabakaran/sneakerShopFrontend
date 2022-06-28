import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'

import "./ItemCard.css";
//import { SearchBar } from "../../atoms/SearchBar/SearchBar";

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
    <Grid container item xs={12}>
    {data && data.map((sneaker) => (
      <Grid container item md={3} sm={12} >
      <Card sx={{ maxWidth: 280, minWidth: 280, margin: "auto", marginBottom: "5vh" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sneaker.image}
          alt="green iguana"
          sx={{height: "auto"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardText'>
           {sneaker.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='cardText'>
            {sneaker.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='outlined' className="cardButton">
          View options
        </Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
   </>
  )
}
