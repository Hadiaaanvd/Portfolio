import React from "react";
import "./testimonials.css";

const RECOMMENDATIONS = [
  {
    name: "Linda Knechtel",
    role: "Engineering Manager @ Staffbase",
    context: "Managed Hadia directly",
    quote:
      "I had the pleasure of managing Hadia during her time as a working student at Staffbase, and she impressed me with her initiative and technical curiosity. She didn't wait to be told what to do next — she looked for what needed doing and got it done. Hadia is the kind of engineer who grows fast, takes feedback well, and makes the people around her better.",
  },
  {
    name: "Renishya Jayan",
    role: "Principal Technical Writer @ Staffbase",
    context: "Worked with Hadia on the same team",
    quote:
      "I had the pleasure of working closely with Hadia for almost a year on usability improvements for the Staffbase Developer Portal. She's friendly, thoughtful, and highly collaborative — she consistently went beyond the task brief and suggested better approaches that improved the final outcome.",
  },
  {
    name: "Eric Whitaker",
    role: "CEO, Innovative MOJO",
    context: "Hadia's client",
    quote:
      "I had the pleasure of collaborating with Hadia on several key projects as a freelance React.js developer, and I can't recommend her highly enough. Her technical skills are top-notch, paired with a creative and efficient approach to problem-solving.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <span className="kicker">What people say</span>
      <h2>Recommendations</h2>
      <div className="recs">
        {RECOMMENDATIONS.map((rec, i) => (
          <article className="rec" key={i}>
            <span className="rec__mark">”</span>
            <p className="rec__quote">{rec.quote}</p>
            <div className="rec__attribution">
              <span className="rec__avatar">{initials(rec.name)}</span>
              <div>
                <span className="rec__name">{rec.name}</span>
                <span className="rec__role">{rec.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
