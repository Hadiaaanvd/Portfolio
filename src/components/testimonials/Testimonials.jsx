import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./testimonials.css";

const RECOMMENDATIONS = [
  {
    name: "Linda Knechtel",
    role: "Engineering Manager @ Staffbase",
    context: "Managed Hadia directly",
    quote:
      "I had the pleasure of managing Hadia during her time as a working student at Staffbase, and she impressed me with her initiative and technical curiosity. In less than a year, she contributed across multiple domains — from Developer Portal improvements to building an MCP server prototype for Staffbase's public APIs. She didn't wait to be told what to do next — she looked for what needed doing and got it done. Hadia is the kind of engineer who grows fast, takes feedback well, and makes the people around her better. I'd recommend her without hesitation.",
  },
  {
    name: "Renishya Jayan",
    role: "Principal Technical Writer @ Staffbase",
    context: "Worked with Hadia on the same team",
    quote:
      "I had the pleasure of working closely with Hadia for almost a year on usability improvements for the Staffbase Developer Portal. She's friendly, thoughtful, and highly collaborative — she consistently went beyond the task brief, asked the right questions, and suggested better approaches that improved the final outcome. A great example was her work on API versioning: since the existing framework didn't support our versioning needs out of the box, she translated input from the API Governance team into a practical solution. Hadia combines strong web development skills with product thinking and a collaborative mindset.",
  },
  {
    name: "Eric Whitaker",
    role: "CEO, Innovative MOJO",
    context: "Hadia's client",
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % RECOMMENDATIONS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const go = (delta) => {
    setIndex((i) => (i + delta + RECOMMENDATIONS.length) % RECOMMENDATIONS.length);
  };

  const active = RECOMMENDATIONS[index];

  return (
    <section id="testimonials" className="container">
      <span className="kicker">What people say</span>
      <h2>Recommendations</h2>

      <div className="spotlight">
        <RiDoubleQuotesL className="spotlight__mark" />
        <p className="spotlight__quote" key={index}>
          {active.quote}
        </p>
        <div className="spotlight__attribution">
          <span className="spotlight__avatar">{initials(active.name)}</span>
          <div>
            <span className="spotlight__name">{active.name}</span>
            <span className="spotlight__role">{active.role}</span>
          </div>
        </div>

        <div className="spotlight__nav">
          <button aria-label="Previous" onClick={() => go(-1)}>
            <HiArrowLeft />
          </button>
          <div className="spotlight__dots">
            {RECOMMENDATIONS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to recommendation ${i + 1}`}
                className={`spotlight__dot ${i === index ? "spotlight__dot--active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button aria-label="Next" onClick={() => go(1)}>
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
