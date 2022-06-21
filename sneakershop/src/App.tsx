import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Container, Navbar, Nav } from "react-bootstrap";
import MuiButton from "./atoms/MuiButton/MuiButton";
import MuiNavbar from "./atoms/MuiNavbar/MuiNavbar";

function App() {
  return (
    <>
      <MuiNavbar />


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
