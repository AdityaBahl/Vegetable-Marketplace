import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Loginpage from './pages/Loginpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Cart from './pages/shoppingcart';
import ProductPage from './pages/ProductPage';
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
