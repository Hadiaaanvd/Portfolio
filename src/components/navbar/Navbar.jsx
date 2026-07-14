import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ rightExtra }) => {
  const { pathname } = useLocation();

  return (
    <div className="navbar container">
      <Link to="/" className="navbar__logo">
        HN
      </Link>
      <div className="navbar__right">
        <span className="navbar__status">
          <span className="navbar__status-dot"></span>
          open to work
        </span>
        <Link
          to="/projects"
          className={`navbar__link ${pathname === "/projects" ? "navbar__link--active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={`navbar__link ${pathname === "/resume" ? "navbar__link--active" : ""}`}
        >
          Resume
        </Link>
        {rightExtra}
      </div>
    </div>
  );
};

export default Navbar;
