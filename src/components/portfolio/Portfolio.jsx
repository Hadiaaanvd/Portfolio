import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import "./portfolio.css";
import Projects from "../projects/Projects";

const Portfolio = () => {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section id="portfolio" className="container">
      <span className="kicker">My Work</span>
      <h2>Things I shipped</h2>

      <div className="portfolio__container">
        <Projects projects={featured} />
      </div>

      <Link to="/projects" className="portfolio__view-all">
        View all projects →
      </Link>
    </section>
  );
};

export default Portfolio;
