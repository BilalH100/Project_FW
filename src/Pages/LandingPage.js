import React from 'react';
import VisitorSection from '../Components/VisitorSection';
import LoginSection from '../Components/LoginSection';

function LandingPage() {
  return (
    <div className="landing">
      <h1>Bienvenue sur notre plateforme</h1>
      <p>Choisissez votre rôle :</p>
      <VisitorSection />
      <LoginSection />
    </div>
  );
}

export default LandingPage;
