import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import "./ItemCard.css"
import dummyimg from "../../images/Jordan1.png"


export default function ItemCard() {
  return (
    <Card sx={{ maxWidth: 280, minWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dummyimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardText'>
            name
          </Typography>
          <Typography variant="body2" color="text.secondary" className='cardText'>
            price
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='outlined' className="cardButton">
          View options
        </Button>
      </CardActions>
    </Card>
  )
}
