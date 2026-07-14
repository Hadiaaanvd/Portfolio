import React from "react";
import "./tickerbar.css";

const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "MCP Servers",
  "Claude Code",
  "Agentic AI",
  "Firebase",
  "GCP Firestore",
  "Tailwind",
  "Redux",
  "Playwright",
  "REST APIs",
  "Git",
  "JavaScript",
  "Laravel",
  "AWS",
  "Chart.js / Highcharts",
  "Stripe",
  "Context API",
  "Styled Components",
  "SASS",
  "Jira",
  "Bootstrap",
];

const TickerBar = () => {
  const track = [...SKILLS, ...SKILLS];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {track.map((skill, i) => (
          <span className="ticker__item" key={i}>
            {skill}
            <span className="ticker__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
