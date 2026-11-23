import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NAV_LINKS = [
  { label: "Work", href: "/#portfolio", id: "portfolio" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const Navbar = ({ rightExtra }) => {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return undefined;
    }

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const lastLink = NAV_LINKS[NAV_LINKS.length - 1];
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActiveSection(lastLink.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="navbar-wrap">
      <div className="navbar container">
        <Link to="/" className="navbar__logo">
          HN
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${activeSection === link.id ? "navbar__link--active" : ""}`}
            >
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
