import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NAV_LINKS = [
  { label: "Work", href: "/#portfolio" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = ({ rightExtra }) => {
  const { pathname } = useLocation();

  return (
    <div className="navbar-wrap">
      <div className="navbar container">
        <Link to="/" className="navbar__logo">
          HN
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
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
        </nav>

        <div className="navbar__right">
          <span className="navbar__status">
            <span className="navbar__status-dot"></span>
            open to work
          </span>
          {rightExtra || (
            <a href="/#contact" className="btn btn-primary">
              Let's talk
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
