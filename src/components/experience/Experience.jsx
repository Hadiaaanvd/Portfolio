import React from "react";
import "./experience.css";

const JOBS = [
  {
    role: "Working Student Engineering",
    company: "Staffbase, Germany",
    date: "June 2025 — June 2026",
    current: true,
    points: [
      "Designed, developed, and deployed an MCP server exposing 17 internal APIs as tools for AI agents, integrated into Staffbase's customer-facing MCP offering.",
      "Built an internal automation tool that cut content-authoring time in Zendesk by 85%, and owned the Developer Portal end to end — API versioning, federated search, a unified filter component.",
      "Advanced AI-native development workflows using Claude Code, OpenCode, and MCP integrations to raise engineering productivity.",
    ],
  },
  {
    role: "Full Stack Developer — React & Firebase",
    company: "Infaque, Pakistan",
    date: "Aug 2021 — Mar 2024",
    points: [
      "Led frontend development of the company's flagship B2B SaaS donor-management platform using React, Firebase, and Node.js.",
      "Independently designed and built Egility, a custom hiring platform, landing the company's first maintenance contract and a long-term client.",
      "Integrated third-party APIs for real-time collaboration and data insights, and cut reported UI bugs by 30% through cross-browser fixes.",
    ],
  },
  {
    role: "Intern, Software Engineering",
    company: "Sah IT, Pakistan",
    date: "Dec 2020 — Jul 2021",
    points: [
      "Built e-commerce and user-facing features in Laravel, delivering pixel-perfect frontend implementations matching design mockups exactly.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container">
      <span className="kicker">git log --oneline</span>
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
