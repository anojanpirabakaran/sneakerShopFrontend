import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MuiNavbar from "./atoms/MuiNavbar/MuiNavbar";
import Aboutus from "./pages/Aboutus/Aboutus";

function App() {
  return (
    <>
      <MuiNavbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Aboutus" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
