import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Product from './Product';

const Headers = () => {
  return (
    <div className="betterview">
      <Link to="/Home">Home</Link>
      <br />
      <Link to="/Product">Product</Link>
      <br />
      <Link to="/Profile">Profile</Link>
      <br />
      <Link to="/Services">Services</Link>
      <br />
    </div>
  );
};
export default Headers;
