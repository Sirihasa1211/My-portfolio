import React from 'react';
import { NavLink } from 'react-router-dom';
import Intro from './Intro';

export default function Navbar() {
  return (
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li>
            <a href="/projects" target="_blank" rel="noopener noreferrer">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
  );
}
