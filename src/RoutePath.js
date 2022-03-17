import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Services from './Services';
import Product from './Product';
import Profile from './Profile';
import Headers from './Headers';
import LoginPage from './LoginPage';
import Home from './Home';

export default function RoutePath() {
  return (
    <div>
      <Router>
        <Headers />

        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Product" element={<Product />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}
