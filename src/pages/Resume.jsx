import React from "react";
import { Link } from "react-router-dom";
import CV from "../assets/Hadia_Naveed_Resume.pdf";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-page__bar container">
        <Link to="/" className="resume-page__back">
          ← Back to portfolio
        </Link>
        <a href={CV} download className="btn btn-primary">
          Download PDF
        </a>
      </div>

      <div className="resume-viewer container">
        <iframe src={CV} title="Hadia Naveed Resume" className="resume-viewer__frame" />
      </div>
    </div>
  );
};

export default Resume;
