import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import VisitorHome from './Pages/Visitor_Pages/VisitorHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/visitor" element={<VisitorHome />} />
      </Routes>
    </Router>
  );
}


export default App;