import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/bookmanager" className="nav-link">Bookmanager</Link>
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;