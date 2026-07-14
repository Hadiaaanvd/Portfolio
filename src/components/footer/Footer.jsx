import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <span className="site-footer__copy">© {year} Hadia Naveed · Germany</span>
        <div className="site-footer__socials">
          <a href="mailto:hadiaaanvd@gmail.com">
            <MdOutlineEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/hadia-naveed-b316911b5/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/Hadiaaanvd" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
