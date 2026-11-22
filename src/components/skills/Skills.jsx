import React from "react";
import { BsStars, BsCodeSlash, BsServer, BsTools } from "react-icons/bs";
import { SKILL_GROUPS } from "../../data/resumeData";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";
import "./skills.css";

const ICONS = {
  "AI Tools & Workflow": BsStars,
  Frontend: BsCodeSlash,
  "Backend & Cloud": BsServer,
  "Tooling & Testing": BsTools,
};

const Skills = () => {
  return (
    <Reveal as="section" id="skills" className="container">
      <Kicker index="02">Toolbox</Kicker>
      <h2>Skills</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => {
          const Icon = ICONS[group.label];
          return (
            <div className="skills__group" key={group.label}>
              <div className="skills__group-header">
                {Icon && <Icon className="skills__icon" />}
                <h5>{group.label}</h5>
              </div>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

export default Skills;
