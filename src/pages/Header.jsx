import React from "react";
import '../styles/header.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerMain">
      <ul className="navItems">
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
