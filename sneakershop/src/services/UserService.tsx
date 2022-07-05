import axios from "axios";

/**
 * userService to get post a user
 */
const userService = (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) =>
  axios.post("http://localhost:8080/clients", {
    email,
    firstName,
    lastName,
    password,
  });

export default userService;
