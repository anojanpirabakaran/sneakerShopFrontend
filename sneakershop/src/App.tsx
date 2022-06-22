import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MuiNavbar from "./atoms/MuiNavbar/MuiNavbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <MuiNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path="/About-us" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
