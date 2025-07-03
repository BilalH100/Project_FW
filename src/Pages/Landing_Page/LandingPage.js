// src/Pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import logo from '../../Assets/Images/LOGO9.png'; 


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      <header className="landing-header">
        <img src={logo} alt="Logo" className="logo" />
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
            We’re on a mission to reduce food waste by offering surprise mystery boxes filled with surplus goodies.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};


export default LandingPage;
