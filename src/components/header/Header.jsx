import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.jpg";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <HeaderSocials />
      <div className="header__container">
        <div className="header__content">
          <h5>Hello I'm</h5>
          <h1>Hadia Naveed</h1>
          <h5 className="text-light">Full-stack Developer</h5>
          <br />
          <p>
          Web Developer with almost 3 years of experience building scalable and user-friendly
web applications using React, TypeScript, Firebase. Proven
expertise in developing SaaS products and integrating third-party APIs. Passionate about front-end performance
optimization and user experience. Currently pursuing a Master's in Web
Engineering and actively seeking opportunities to contribute to innovative web
solutions.
          </p>
          <CTA />
        </div>
        <div className="about__me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
