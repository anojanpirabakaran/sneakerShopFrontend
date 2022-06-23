import { Paper } from '@mui/material'
import React from 'react'
import ItemCard from '../../organisms/ItemCard/ItemCard'

import "./Shop.css"

export default function Shop() {
  return (
    <Paper elevation={2} className="paper_background">
    <ItemCard/>
    </Paper>
  )
}
