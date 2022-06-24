import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'

import "./ItemCard.css"
import dummyimg from "../../images/Jordan1.png"

interface Sneaker {
  id: string,
  name: string, 
  description: string, 
  image: string,
  price: string,
  brand: string
}


export default function ItemCard() {

  const [data, setData] = useState<Sneaker[]>([]);

  const getSneakerData = () => {
    ProductService.getAll()
    .then((res) => {
      console.log(res)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getSneakerData()
  }, [])

  return (
    <>
    {data && data.map((sneaker) => (
      <Card sx={{ maxWidth: 280, minWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sneaker.image}
          alt="green iguana"
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
    ))}
   </>
  )
}
