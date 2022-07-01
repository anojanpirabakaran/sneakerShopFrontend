import axios from "axios";

const ProductService = {
  getAll: () => axios.get("http://localhost:8080/sneakers"),
  getById: (sneakerId: string) =>
    axios.get("http://localhost:8080/sneakers/" + sneakerId),
};

export default ProductService;
