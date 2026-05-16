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
        <div
          className="project-container"
          key={i}
       
        >
          <Swiper
            effect={"fade"}
            speed={1400}
            navigation={false}
            pagination={pagination}
            modules={[Pagination]}
          >
            {project.img.map((x, index) => (
              <SwiperSlide key={index}>
                <img  onClick={() => navigateToExternalUrl(project.link)} className="project-image" src={x} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="project-details">
            <div onClick={() => navigateToExternalUrl(project.link)} className="title">{project.title}</div>
            {project.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
