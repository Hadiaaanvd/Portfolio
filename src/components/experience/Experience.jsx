import React from "react";
import { JOBS } from "../../data/resumeData";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="container">
      <span className="kicker">Career</span>
      <h2>Where I've worked</h2>
      <div className="timeline">
        {JOBS.map((job, i) => (
          <article className="timeline__item" key={i}>
            <span className={`timeline__marker ${job.current ? "timeline__marker--current" : ""}`} />
            <div className="timeline__meta">{job.date}</div>
            <h4 className="timeline__role">
              {job.role} <span className="timeline__at">@ {job.company}</span>
            </h4>
            <ul className="timeline__points">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
