import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import { PROJECTS } from "../data/projects";
import "./projects-page.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <section className="container projects-page__hero">
        <span className="kicker">My Work</span>
        <h2>All projects</h2>
      </section>
      <div className="container">
        <Projects projects={PROJECTS} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
