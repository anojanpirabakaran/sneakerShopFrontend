import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MuiNavbar from "./atoms/MuiNavbar/MuiNavbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import { Box } from "@mui/material";
import Shop from "./pages/Shop/Shop";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { ShoppingCartContextProvider } from "../src/atoms/Context/ShoppingCartContext";

function App() {
  return (
    <Box>
      <ShoppingCartContextProvider>
        <MuiNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </Box>
  );
}

export default App;
