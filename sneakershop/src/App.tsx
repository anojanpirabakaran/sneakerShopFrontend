import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedProductPage from "./Pages/DetailedProductPage";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";
import ShoppingCart from "./Pages/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Products" element={<ProductPage />}></Route>
        <Route path="/Product" element={<DetailedProductPage />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
