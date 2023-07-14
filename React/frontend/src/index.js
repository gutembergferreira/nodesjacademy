import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import LoginPage from './LoginPage';
import Signup from './SignupPage';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
