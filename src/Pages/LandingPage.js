import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <h1>Too Good To Go Morocco</h1>
        <p className="subtitle">Fighting food waste with surprise food boxes</p>
      </header>

      <main className="landing-main">
        <div className="button-group">
          <button className="btn consumer" onClick={() => window.location.href = "/consumer"}>
            I’m a Consumer
          </button>
          <button className="btn vendor" onClick={() => window.location.href = "/vendor"}>
            I’m a Vendor
          </button>
          <Link to="/visitor" className="visitor-link">
            <button className="btn visitor">Continue as Visitor</button>
          </Link>
        </div>

        <section className="mission-section">
          <p className="mission-text">
            We’re on a mission to reduce food waste by offering surprise mystery boxes filled with surplus goodies. Join us in making a positive impact on the planet while enjoying delicious surprises!
          </p>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="contact-info">
          <span>📧 TooGoodToGo@gmail.com</span>
          <span>📞 (212)666666666</span>
          <span>📍 1234 Elm St, Casa Blanca, Morocco</span>
        </div>
        <p className="copyright">© 2025 Too Good To Go. <span className="green">All rights reserved.</span></p>
      </footer>
    </div>
  );
};

export default LandingPage;
