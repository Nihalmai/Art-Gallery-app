import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Artify from "./Pages/Artify";
import Artworks from "./Pages/Artworks";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Signin from "./Pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Artify />} />
        <Route path='/artworks' element={<Artworks />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
