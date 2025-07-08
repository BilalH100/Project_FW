import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import IntroPage from './Pages/IntroPage/IntroPage';
import LandingPage from './Pages/Landing_Page/LandingPage';
import VisitorHome from './Pages/Visitor_Pages/VisitorHome';
import Login from './Pages/LoginPage/Login'; 
import Signup from './Pages/SignUpPage/signup';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/intro" />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/visitor" element={<VisitorHome />} />
      <Route path="/consumer" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} />
      </Routes>
  );
};

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
