import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./projects.css";
import { Pagination } from "swiper";

const Projects = ({ projects }) => {
  const navigateToExternalUrl = (url) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <div className="projects-component">
      {projects.map((project, i) => (
        <div className="project-container" key={i}>
          <div className="project-window__bar">
            <span className="terminal-dot terminal-dot--red"></span>
            <span className="terminal-dot terminal-dot--yellow"></span>
            <span className="terminal-dot terminal-dot--green"></span>
            <span className="project-window__title">{project.file}</span>
          </div>

          {project.img && project.img.length > 0 ? (
            <Swiper
              effect={"fade"}
              speed={1400}
              navigation={false}
              pagination={pagination}
              modules={[Pagination]}
            >
              {project.img.map((x, index) => (
                <SwiperSlide key={index}>
                  <img
                    onClick={() => navigateToExternalUrl(project.link)}
                    className="project-image"
                    src={x}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="project-placeholder">
              <span className="project-placeholder__glyph">{"</>"}</span>
            </div>
          )}

          <div className="project-details">
            <div
              onClick={() => navigateToExternalUrl(project.link)}
              className={`title ${project.link ? "title--link" : ""}`}
            >
              {project.title}
            </div>
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
