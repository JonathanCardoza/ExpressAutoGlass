import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">
          Express Auto Glass
        </Link>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to="/gallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
