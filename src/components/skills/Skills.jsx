import React from "react";
import { SKILL_GROUPS } from "../../data/resumeData";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="container">
      <span className="kicker">Toolbox</span>
      <h2>Skills</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group, i) => (
          <div className="skills__group" key={i}>
            <h5>{group.label}</h5>
            <ul>
              {group.skills.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
