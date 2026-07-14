import React from "react";
import "./testimonials.css";

const RECOMMENDATIONS = [
  {
    name: "Linda Knechtel",
    role: "Engineering Manager @ Staffbase",
    context: "Managed Hadia directly",
    quote:
      "I had the pleasure of managing Hadia during her time as a working student at Staffbase, and she impressed me with her initiative and technical curiosity. In less than a year, she contributed across multiple domains — from Developer Portal improvements to building an MCP server prototype for Staffbase's public APIs. She didn't wait to be told what to do next — she looked for what needed doing and got it done. Hadia is the kind of engineer who grows fast, takes feedback well, and makes the people around her better.",
  },
  {
    name: "Renishya Jayan",
    role: "Principal Technical Writer @ Staffbase",
    context: "Worked with Hadia on the same team",
    quote:
      "I had the pleasure of working closely with Hadia for almost a year on usability improvements for the Staffbase Developer Portal. She's friendly, thoughtful, and highly collaborative — she consistently went beyond the task brief, asked the right questions, and suggested better approaches that improved the final outcome. Hadia combines strong web development skills with product thinking and a collaborative mindset.",
  },
  {
    name: "Eric Whitaker",
    role: "CEO, Innovative MOJO",
    context: "Hadia's client",
    quote:
      "I had the pleasure of collaborating with Hadia on several key projects as a freelance React.js developer, and I can't recommend her highly enough. Her technical skills are top-notch — she brings a deep understanding of React and modern web development practices, paired with a creative and efficient approach to problem-solving. Beyond her technical prowess, Hadia is a joy to work with: positive, collaborative, and committed to deadlines.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <span className="kicker">What people say</span>
      <h2>Recommendations</h2>
      <div className="recs">
        {RECOMMENDATIONS.map((rec, i) => (
          <article className="rec" key={i}>
            <p className="rec__quote">{rec.quote}</p>
            <div className="rec__attribution">
              <span className="rec__name">{rec.name}</span>
              <span className="rec__role">{rec.role}</span>
              <span className="rec__context">{rec.context}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
