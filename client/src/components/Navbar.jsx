import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">Paaru's Kitchen</a>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>
        <a href="/about" className="navbar-link">About</a>
        <a href="/menu" className="navbar-link">Menu</a>
        <a href="/contact" className="navbar-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;