import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">Fake Store</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Products</Link>
        <Link to="/cart" className="navbar-link">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
