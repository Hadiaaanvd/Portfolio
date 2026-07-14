import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
