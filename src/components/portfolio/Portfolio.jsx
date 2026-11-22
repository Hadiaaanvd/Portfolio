import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import "./portfolio.css";
import Projects from "../projects/Projects";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";

const Portfolio = () => {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <Reveal as="section" id="portfolio" className="container">
      <Kicker index="01">My Work</Kicker>
      <h2>Things I shipped</h2>

      <div className="portfolio__container">
        <Projects projects={featured} />
      </div>

      <Link to="/projects" className="portfolio__view-all">
        View all projects →
      </Link>
    </Reveal>
  );
};

export default Portfolio;
