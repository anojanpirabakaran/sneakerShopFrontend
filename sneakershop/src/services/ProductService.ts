import axios from "axios";

/**
 * Product service to get all data from db
 */
const ProductService = {
  getAll: () => axios.get("http://localhost:8080/sneakers"),
  getById: (sneakerId: string) =>
    axios.get("http://localhost:8080/sneakers/" + sneakerId),
};

export default ProductService;
