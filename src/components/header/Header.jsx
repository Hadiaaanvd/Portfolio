import React from "react";
import { Link } from "react-router-dom";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.jpg";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="header__topbar container">
        <span className="header__logo">HN</span>
        <div className="header__topbar-right">
          <span className="header__status">
            <span className="header__status-dot"></span>
            open to work
          </span>
          <Link to="/resume" className="header__resume-link">
            Resume
          </Link>
        </div>
      </div>

      <div className="header__container container">
        <div className="header__content">
          <span className="kicker">Hello, I'm</span>
          <h1>
            Hadia
            <br />
            Naveed
          </h1>
          <h4 className="header__tagline">
            I build production <span className="accent">AI infrastructure</span> and agentic
            systems.
          </h4>
          <p>
            Full-stack developer with almost 3 years of experience shipping scalable web
            applications, developer tooling, and — more recently — the agentic
            infrastructure that lets AI actually do things. Currently pursuing a Master's in
            Web Engineering in Germany.
          </p>
          <span className="header__building">
            <span className="header__building-dot"></span>
            currently building at Staffbase, Germany
          </span>
          <CTA />
          <HeaderSocials />
          <div className="header__stats">
            <div className="header__stat">
              <strong>3+</strong>
              <span>years experience</span>
            </div>
            <div className="header__stat">
              <strong>10+</strong>
              <span>projects shipped</span>
            </div>
          </div>
        </div>
        <div className="about__me">
          <div className="terminal-window">
            <div className="terminal-window__bar">
              <span className="terminal-dot terminal-dot--red"></span>
              <span className="terminal-dot terminal-dot--yellow"></span>
              <span className="terminal-dot terminal-dot--green"></span>
              <span className="terminal-window__title">profile.jpg</span>
            </div>
            <img src={ME} alt="Hadia Naveed" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
