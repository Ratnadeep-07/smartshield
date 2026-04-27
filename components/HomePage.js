import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="home-navbar">
        <h1 className="logo">🛡 Smart Shield</h1>
        <div>
          <button className="btn outline" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="btn primary" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>
          AI-Powered Protection Against <span>Cyber Threats</span>
        </h2>
        <p>
          Detect phishing messages, malicious links, and deepfake content in real-time.
        </p>

        <div className="hero-buttons">
          {/* ✅ CHANGE MADE HERE */}
          <button
            className="btn primary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>

          <button className="btn outline">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Core Security Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📩 Phishing Detection</h3>
            <p>AI scans messages to identify scams instantly.</p>
          </div>

          <div className="feature-card">
            <h3>🔗 Link Protection</h3>
            <p>Detect harmful URLs before you click.</p>
          </div>

          <div className="feature-card">
            <h3>🎭 Deepfake Detection</h3>
            <p>Identify manipulated media using AI.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Real-Time Alerts</h3>
            <p>Instant warnings with clear explanations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Secure Your Digital Life</h2>
        <button
          className="btn primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Smart Shield</p>
      </footer>
    </div>
  );
};

export default HomePage;