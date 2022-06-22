import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MuiNavbar from "./atoms/MuiNavbar/MuiNavbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <MuiNavbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
