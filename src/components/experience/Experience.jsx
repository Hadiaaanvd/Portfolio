import React, { useState } from "react";
import { JOBS } from "../../data/resumeData";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";
import "./experience.css";

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <Reveal as="section" id="experience" className="container">
      <Kicker index="03">Career</Kicker>
      <h2>Where I've worked</h2>

      <div className="exp-switcher">
        <div className="exp-tabs" role="tablist" aria-label="Work history">
          {JOBS.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              aria-selected={i === active}
              className={`exp-tab ${i === active ? "exp-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {j.company.split(",")[0]}
            </button>
          ))}
        </div>

        <div className="exp-panel" key={active}>
          <h4 className="exp-panel__role">
            {job.role}
            <span className="exp-panel__at"> @ {job.company}</span>
          </h4>
          <div className="exp-panel__meta">
            <span className="exp-panel__date">{job.date}</span>
            {job.current && <span className="exp-panel__badge">Current</span>}
          </div>
          <ul className="exp-panel__points">
            {job.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
