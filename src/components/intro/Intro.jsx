import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <span className="about__icon-wrap">
                <FaAward className="about__icon" />
              </span>
              <h5>Experience</h5>
              <small>2+ year</small>
            </article>
            <article className="about__card">
              <span className="about__icon-wrap">
                <VscFolderLibrary className="about__icon" />
              </span>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <div className="about__detail">
            <p>
              Hello, I'm Hadia Naveed, and I’m excited to share my journey in
              software engineering with you. My fascination with problem-solving
              and the endless possibilities of technology set me on this path
              back in 2016. Driven by an innate curiosity, I dove into software
              engineering, and I've been fortunate to experience some incredible
              moments along the way—earning a GPA of 3.9, receiving a silver
              medal, and working on projects that have truly made an impact.
            </p>
            <p>
              After completing my degree in 2020, I began my career as a Laravel
              developer, inspired by the skills I gained through a final year
              project that involved creating a social platform for food
              enthusiasts. As I grew, I ventured into front-end development,
              building precise designs with HTML, CSS, and later, embracing
              React as a powerful tool to bring ideas to life.
            </p>
            <p>
              My career took a thrilling turn when I joined Infaque, a startup
              where I was among the first team members. Together, we embarked on
              the ambitious journey of building Infaque, a solution empowering
              nonprofits to manage donor relationships, track insights, and
              secure support. I was also able to lead the development of
              Egility, a project that not only expanded my expertise but secured
              our company a long-term partnership.
            </p>
            <p>
              In addition to my professional work, I’ve completed nearly ten
              freelance projects in React and JavaScript this year alone, each
              one teaching me something new and further fueling my passion for
              crafting user-focused web experiences. Now, I’m excited to be
              expanding my knowledge even further. After working for nearly
              three years in Pakistan, I decided to pursue a Master’s degree in
              Web Engineering in Germany, opening up new opportunities for
              growth and exploration.
            </p>

            <p>
              I'm grateful for every step of this journey, and I’m looking
              forward to continuing it with humility and curiosity. Let's
              connect and create a future full of possibilities together.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
