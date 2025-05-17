import React from 'react';
import './Navbar.css'; // You'll create this CSS file
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          <li><NavLink className="link" to="/">Home</NavLink></li>
          <li><NavLink className="link" to="/about">About</NavLink></li>
          <li><NavLink className="link" to="/projects">Projects</NavLink></li>
          <li><NavLink className="link" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  );
}
