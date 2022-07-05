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
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";
import StickyFooter from "./atoms/StickyFooter/StickyFooter";
import { ShoppingCartContextProvider } from "./atoms/Context/ShoppingCartContext";
import { SneakerCardContextProvider } from "./atoms/Context/SneakerCardContext";

/**
 * The whole Application
 * @returns whole Application
 */
function App() {
  return (
    <Box>
      <ShoppingCartContextProvider>
        <SneakerCardContextProvider>
          <MuiNavbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop/:sneakerId" element={<ProductViewPage />} />
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </BrowserRouter>
        </SneakerCardContextProvider>
      </ShoppingCartContextProvider>
      <StickyFooter></StickyFooter>
    </Box>
  );
}

export default App;
