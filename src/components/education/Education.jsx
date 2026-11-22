import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../../data/resumeData";
import Kicker from "../kicker/Kicker";
import Reveal from "../reveal/Reveal";
import "./education.css";

const Education = () => {
  return (
    <Reveal as="section" id="education" className="container">
      <div className="education__grid">
        <div className="education__col">
          <Kicker index="04">Background</Kicker>
          <h2>Education</h2>
          <div className="education__list">
            {EDUCATION.map((item, i) => (
              <div className="education__item" key={i}>
                <span className="education__grade">{item.grade}</span>
                <div>
                  <h5>{item.degree}</h5>
                  <p>{item.school}</p>
                  <span className="education__date">{item.date}</span>
                  {item.thesis && (
                    <p className="education__thesis">
                      <span className="education__thesis-label">{item.thesis.status}</span>{" "}
                      Thesis: {item.thesis.title} (supervised by {item.thesis.supervisor})
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education__col">
          <span className="kicker">Recognition</span>
          <h2>Certifications</h2>
          <div className="certs__list">
            {CERTIFICATIONS.map((cert, i) => (
              <div className="certs__item" key={i}>
                <div>
                  <h5>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noreferrer">
                        {cert.name} ↗
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h5>
                  <span className="certs__issuer">{cert.issuer}</span>
                </div>
                {cert.date && <span className="certs__date">{cert.date}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Education;
