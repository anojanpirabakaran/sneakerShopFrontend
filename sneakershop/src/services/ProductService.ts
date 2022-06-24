import React from 'react'
import axios from 'axios'

const ProductService = {
  getAll: () => axios.get("http://localhost:8080/sneakers")
}

export default ProductService
