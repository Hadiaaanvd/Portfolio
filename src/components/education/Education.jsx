import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../../data/resumeData";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="container">
      <div className="education__grid">
        <div className="education__col">
          <span className="kicker">Background</span>
          <h2>Education</h2>
          <div className="education__list">
            {EDUCATION.map((item, i) => (
              <div className="education__item" key={i}>
                <span className="education__grade">{item.grade}</span>
                <div>
                  <h5>{item.degree}</h5>
                  <p>{item.school}</p>
                  <span className="education__date">{item.date}</span>
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
                  <h5>{cert.name}</h5>
                  <span className="certs__issuer">{cert.issuer}</span>
                </div>
                {cert.date && <span className="certs__date">{cert.date}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
