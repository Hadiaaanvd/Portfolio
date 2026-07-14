import React from "react";
import "./projects.css";

const Projects = ({ projects }) => {
  const navigateToExternalUrl = (url) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <div className="projects-component">
      {projects.map((project, i) => (
        <div
          className="project-container"
          key={i}
          onClick={() => navigateToExternalUrl(project.link)}
        >
          <div className="project-window__bar">
            <span className="terminal-dot terminal-dot--red"></span>
            <span className="terminal-dot terminal-dot--yellow"></span>
            <span className="terminal-dot terminal-dot--green"></span>
            <span className="project-window__title">{project.file}</span>
          </div>

          {project.img && project.img.length > 0 ? (
            <img className="project-image" src={project.img[0]} alt="" />
          ) : (
            <div className="project-placeholder">
              <span className="project-placeholder__glyph">{"</>"}</span>
            </div>
          )}

          <div className="project-details">
            <div className={`title ${project.link ? "title--link" : ""}`}>{project.title}</div>
            <p>{project.description}</p>
            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag, t) => (
                  <span className="project-tag" key={t}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
