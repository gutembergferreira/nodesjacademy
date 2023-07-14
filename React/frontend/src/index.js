import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
