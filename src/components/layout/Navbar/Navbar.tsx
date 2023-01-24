import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.styles.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">GitHub Repos</div>
      <Link to="/" className="link">
        Home
      </Link>
    </nav>
  );
};
