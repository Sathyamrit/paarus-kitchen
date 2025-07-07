import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Your favourite place for Biryani and Kababs</p>
        <p>&copy; {new Date().getFullYear()} Paarus Kitchen. All rights reserved.</p>
        {/* <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
      <div className="footer-developer">
        <p>Developed by</p> 
        <a href="https://github.com/Sathyamrit">Sathyamrit</a>
      </div>
    </footer>
  );
}

export default Footer;