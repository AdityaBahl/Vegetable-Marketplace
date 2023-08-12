// App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Loginpage from './pages/Loginpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Shoppingcart from './pages/shoppingcart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Routes>
    </div>
  );
}

export default App;
