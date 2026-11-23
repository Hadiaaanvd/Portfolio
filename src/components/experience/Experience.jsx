import React from "react";
import { JOBS } from "../../data/resumeData";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";
import "./experience.css";

const Experience = () => {
  return (
    <Reveal as="section" id="experience" className="container">
      <Kicker index="03">Career</Kicker>
      <h2>Where I've worked</h2>

      <div className="exp-list">
        {JOBS.map((job, i) => (
          <article className="exp-entry" key={job.company}>
            <span className={`exp-entry__marker ${job.current ? "exp-entry__marker--current" : ""}`} />
            <div className="exp-entry__head">
              <h3 className="exp-entry__role">{job.role}</h3>
              <div className="exp-entry__byline">
                <span className="exp-entry__company">{job.company}</span>
                <span className="exp-entry__location">{job.location}</span>
                <span className="exp-entry__date">{job.date}</span>
                {job.current && <span className="exp-entry__badge">Current</span>}
              </div>
            </div>
            <p className="exp-entry__summary">{job.summary}</p>
            {job.highlights && (
              <ul className="exp-entry__highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Reveal>
  );
};

export default Experience;
