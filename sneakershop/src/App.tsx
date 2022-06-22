<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './molecules/ItemCard/ItemCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> piraaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <ItemCard/>
      </header>
    </div>
=======
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { Container, Navbar, Nav } from "react-bootstrap";
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
>>>>>>> main
  );
}

export default App;
