import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_k2qawqh",
        "template_c6rkpn6",
        formRef.current,
        "X7K7ebhIeOy3YwHki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-cta">
      <div className="container contact__container">
        <div className="contact__intro">
          <span className="kicker">Get In Touch</span>
          <h2 className="contact__headline">
            Let's build something
            <br />
            worth shipping.
          </h2>
          <div className="contact__links">
            <a href="mailto:hadiaaanvd@gmail.com" className="btn btn-primary">
              hadiaaanvd@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/hadia-naveed-b316911b5/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="6"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span className="contact__thanks">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
