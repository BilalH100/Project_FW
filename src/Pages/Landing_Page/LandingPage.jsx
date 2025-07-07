// src/Pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Footer from '../../Layouts/Footer';
import logo from '../../Assets/Images/Logo_.jpg';
import mysteryImg from '../../Assets/Images/Landing page 2.png';

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // petit délai pour laisser le temps à la page de se monter
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100); // petite pause pour bien lancer l'animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      {/* Image + logo */}
      <div className="hero-image-wrapper">
        <img src={mysteryImg} alt="Mystery Box" className="mystery-img-large" />
        <img src={logo} alt="Logo" className="logo-on-image" />
      </div>

      {/* Section principale avec animation slide-up */}
      <main className={`landing-main ${showContent ? 'slide-up' : ''}`}>
        <div className="button-group">
          <button className="btn consumer" onClick={() => window.location.href = "/consumer"}>
            I’m a Consumer
          </button>
          <button className="btn vendor" onClick={() => window.location.href = "/vendor"}>
            I’m a Vendor
          </button>
          <button
            className="btn visitor"
            onClick={() => {
              localStorage.setItem('isGuest', 'true');
              window.location.href = "/visitor";
            }}
          >
            Continue as Visitor
          </button>
        </div>

        <section className="mission-section">
          <p className="mission-text">
            We’re on a mission to reduce food waste by offering surprise mystery boxes filled with surplus goodies. <br />
            Join us in making a positive impact on the planet while enjoying delicious surprises!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
