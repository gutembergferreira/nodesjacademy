import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './HomePage';
import Login from './LoginPage';
import Signup from './SignupPage';
import Products from './ProductsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;