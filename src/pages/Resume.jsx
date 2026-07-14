import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import ME from "../assets/me.jpg";
import CV from "../assets/Hadia_Naveed_Resume.pdf";
import { JOBS, EDUCATION, CERTIFICATIONS, SKILL_GROUPS } from "../data/resumeData";
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

      <div className="resume-doc container">
        <div className="resume-doc__head">
          <img src={ME} alt="Hadia Naveed" className="resume-doc__photo" />
          <h1>Hadia Naveed</h1>
          <p className="resume-doc__title">Software Engineer</p>
          <div className="resume-doc__contact">
            <a href="mailto:hadiaaanvd@gmail.com">
              <MdOutlineEmail /> hadiaaanvd@gmail.com
            </a>
            <a href="tel:+4917674814420">
              <FaPhoneAlt /> +49 176 74814420
            </a>
            <a href="https://www.linkedin.com/in/hadia-naveed-b316911b5/" target="_blank" rel="noreferrer">
              <BsLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Hadiaanvd" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <span>Germany</span>
          </div>
        </div>

        <hr />

        <section className="resume-doc__section">
          <h3>Summary</h3>
          <p>
            Software engineer with production experience building AI infrastructure and agentic
            systems. I ship fast, take ownership end-to-end, and integrate AI workflows as a core
            part of how I build.
          </p>
        </section>

        <section className="resume-doc__section">
          <h3>Experience</h3>
          {JOBS.map((job, i) => (
            <div className="resume-job" key={i}>
              <div className="resume-job__head">
                <strong>{job.company}</strong>
                <span>{job.date}</span>
              </div>
              <div className="resume-job__role">{job.role}</div>
              <ul>
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-doc__section">
          <h3>Technical Expertise</h3>
          {SKILL_GROUPS.map((group, i) => (
            <p key={i} className="resume-doc__skill-row">
              <strong>{group.label}:</strong> {group.skills.join(", ")}
            </p>
          ))}
        </section>

        <div className="resume-doc__cols">
          <section className="resume-doc__section">
            <h3>Education</h3>
            {EDUCATION.map((item, i) => (
              <div className="resume-doc__edu" key={i}>
                <div className="resume-job__head">
                  <strong>{item.degree}</strong>
                  <span>{item.date}</span>
                </div>
                <p>
                  {item.school} · Grade {item.grade}
                </p>
              </div>
            ))}
          </section>

          <section className="resume-doc__section">
            <h3>Certifications</h3>
            {CERTIFICATIONS.map((cert, i) => (
              <div className="resume-doc__edu" key={i}>
                <div className="resume-job__head">
                  <strong>{cert.name}</strong>
                  {cert.date && <span>{cert.date}</span>}
                </div>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </section>
        </div>

        <a
          href="https://hadia-naveed.web.app/"
          className="resume-doc__portfolio-link"
          target="_blank"
          rel="noreferrer"
        >
          hadia-naveed.web.app <HiOutlineExternalLink />
        </a>
      </div>
    </div>
  );
};

export default Resume;
