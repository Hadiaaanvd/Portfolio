import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { JOBS } from "../../data/resumeData";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";
import "./experience.css";

const Experience = () => {
  return (
    <Reveal as="section" id="experience" className="container">
      <Kicker index="03">Career</Kicker>
      <h2>Where I've worked</h2>
      <div className="job-list">
        {JOBS.map((job, i) => (
          <article className={`job-card ${job.current ? "job-card--current" : ""}`} key={i}>
            <div className="job-card__header">
              <div className="job-card__title">
                <span className="job-card__icon-wrap">
                  <BsBriefcase className="job-card__icon" />
                </span>
                <div>
                  <h4 className="job-card__role">{job.role}</h4>
                  <span className="job-card__company">{job.company}</span>
                </div>
              </div>
              <div className="job-card__meta">
                {job.current && <span className="job-card__badge">Current</span>}
                <span className="job-card__date">{job.date}</span>
              </div>
            </div>
            <ul className="job-card__points">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Reveal>
  );
};

export default Experience;
