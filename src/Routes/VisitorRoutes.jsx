// src/Routes/VisitorRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VisitorHome from '../Pages/Visitor_Pages/VisitorHome';

export default function VisitorRoutes() {
  return (
    <Routes>
      <Route path="/visitor" element={<VisitorHome />} />
    </Routes>
  );
}
