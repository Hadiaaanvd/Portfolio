import React from "react";
import Navbar from "../components/navbar/Navbar";
import CV from "../assets/Hadia_Naveed_Resume.pdf";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar
        rightExtra={
          <a href={CV} download className="btn btn-primary">
            Download PDF
          </a>
        }
      />

      <div className="resume-viewer container">
        <iframe src={CV} title="Hadia Naveed Resume" className="resume-viewer__frame" />
      </div>
    </div>
  );
};

export default Resume;
