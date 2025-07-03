// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroPage from './Pages/IntroPage/IntroPage';
import LandingPage from './Pages/Landing_Page/LandingPage';
import VisitorRoutes from './Routes/VisitorRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>

      {/* External routes */}
      <VisitorRoutes />
    </Router>
  );
}

export default App;
