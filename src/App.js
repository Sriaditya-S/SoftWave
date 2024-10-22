import React, { useState } from "react";
import "./App.css"; // Import the CSS

const App = () => {
  const [faqOpen, setFaqOpen] = useState(1); // To toggle FAQs

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src="your-logo-url" alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
        </nav>
        <button className="contact-btn">Contact Us</button>
      </header>

      {/* Main Section */}
      <main>
        <h1>A Digital Product Studio that will Work</h1>
        <p className="for-text">
          For
          <span> Startups</span>,
          <span> Enterprise Leaders</span>,
          <span> Media & Publishers</span>,
          and
          <span> Social Good</span>
        </p>
        <div className="main-buttons">
          <button className="our-works-btn">Our Works</button>
          <button className="contact-btn">Contact Us</button>
        </div>

        {/* Client Section */}
        <div className="client-section">
          <h3>Trusted By 250+ Companies</h3>
          <div className="clients">
            <img src="zapier-logo-url" alt="Zapier" />
            <img src="spotify-logo-url" alt="Spotify" />
            <img src="zoom-logo-url" alt="Zoom" />
            <img src="slack-logo-url" alt="Slack" />
            <img src="amazon-logo-url" alt="Amazon" />
            <img src="adobe-logo-url" alt="Adobe" />
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>Still have any questions? Contact our team via hello@Softwave.com</p>

        <div className="faq-container">
          {[
            { id: 1, question: "What services does Softwave provide?", answer: "Softwave offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, and more." },
            { id: 2, question: "How can Softwave help my business?", answer: "We provide tailored digital solutions to meet your business needs." },
            { id: 3, question: "What industries does Softwave work with?", answer: "Softwave works with a variety of industries, including technology, healthcare, and education." },
            { id: 4, question: "How long does it take to complete a project?", answer: "Project timelines vary based on complexity, typically ranging from 4-12 weeks." },
            { id: 5, question: "Do you offer ongoing support?", answer: "Yes, we provide ongoing support and maintenance." },
          ].map((faq) => (
            <div
              className={`faq-item ${faqOpen === faq.id ? "open" : ""}`}
              onClick={() => toggleFaq(faq.id)}
              key={faq.id}
            >
              <div className="faq-question">
                <span>{faq.id}</span> {faq.question}
                <span className="toggle">{faqOpen === faq.id ? "−" : "+"}</span>
              </div>
              {faqOpen === faq.id && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Thank you for your interest in Softwave.</h2>
        <button className="start-project-btn">Start Project</button>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Why are you contacting us?</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Web Design</label>
              <label><input type="checkbox" /> Mobile App Design</label>
              <label><input type="checkbox" /> Collaboration</label>
              <label><input type="checkbox" /> Others</label>
            </div>
          </div>
          <div className="form-group">
            <label>Your Budget</label>
            <input type="range" min="1000" max="50000" step="1000" />
          </div>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="your-logo-url" alt="Logo" />
          </div>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="contact-info">
            <p>Email: hello@Softwave.com</p>
            <p>Phone: +91 011-2332333</p>
            <p>Location: Somewhere in the World</p>
          </div>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
