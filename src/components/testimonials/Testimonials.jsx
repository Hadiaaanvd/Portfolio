import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./testimonials.css";

const RECOMMENDATIONS = [
  {
    name: "Linda Knechtel",
    role: "Engineering Manager @ Staffbase",
    quote:
      "I had the pleasure of managing Hadia during her time as a working student at Staffbase, and she impressed me with her initiative and technical curiosity. In less than a year, she contributed across multiple domains — from Developer Portal improvements to building an MCP server prototype for Staffbase's public APIs. She didn't wait to be told what to do next — she looked for what needed doing and got it done. Hadia is the kind of engineer who grows fast, takes feedback well, and makes the people around her better. I'd recommend her without hesitation.",
  },
  {
    name: "Renishya Jayan",
    role: "Principal Technical Writer @ Staffbase",
    quote:
      "I had the pleasure of working closely with Hadia for almost a year on usability improvements for the Staffbase Developer Portal. She's friendly, thoughtful, and highly collaborative — she consistently went beyond the task brief, asked the right questions, and suggested better approaches that improved the final outcome. A great example was her work on API versioning: since the existing framework didn't support our versioning needs out of the box, she translated input from the API Governance team into a practical solution. Hadia combines strong web development skills with product thinking and a collaborative mindset.",
  },
  {
    name: "Eric Whitaker",
    role: "CEO, Innovative MOJO",
    quote:
      "I had the pleasure of collaborating with Hadia on several key projects as a freelance React.js developer, and I can't recommend her highly enough. Her technical skills are top-notch — she brings a deep understanding of React and modern web development practices, paired with a creative and efficient approach to problem-solving. Beyond her technical prowess, Hadia is a joy to work with: positive, collaborative, and committed to deadlines. She was an invaluable asset to our team, always willing to go the extra mile to ensure project success.",
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

      <div className="rec-grid">
        {RECOMMENDATIONS.map((rec) => (
          <div className="rec-card" key={rec.name}>
            <RiDoubleQuotesL className="rec-card__mark" />
            <p className="rec-card__quote">{rec.quote}</p>
            <div className="rec-card__attribution">
              <span className="rec-card__avatar">{initials(rec.name)}</span>
              <div>
                <span className="rec-card__name">{rec.name}</span>
                <span className="rec-card__role">{rec.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
