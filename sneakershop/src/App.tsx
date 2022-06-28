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
import ShowViewPage from "./pages/ShopViewPage/ShowViewPage";

function App() {
  return (
    <Box>
      <MuiNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop/:sneakerId" element={<ShowViewPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
