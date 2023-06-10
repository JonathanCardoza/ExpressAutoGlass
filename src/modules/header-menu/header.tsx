import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo">
          Express Auto Glass
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/gallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
    </header>
  );
}
