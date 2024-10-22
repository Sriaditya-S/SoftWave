import React from "react";
import "./App.css"; // Importing CSS file

const App = () => {
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
    </div>
  );
};

export default App;

