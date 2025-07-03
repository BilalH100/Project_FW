import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuBar.css';

export default function MenuBar({ isVisitor, onMapDeniedClick }) {
  const navigate = useNavigate();

  const handleMapClick = (e) => {
    e.preventDefault();
    if (isVisitor) {
      if (onMapDeniedClick) onMapDeniedClick(); // ✅ appel de la fonction passée
    } else {
      navigate("/map");
    }
  };

  return (
    <nav className="menu-bar" role="navigation" aria-label="Main menu">
      <a href="/home">Home</a>
      <a href="/orders">Orders</a>
      <a href="/notifications">Notifications</a>
      <a href="/map" onClick={handleMapClick}>Map</a> {/* ✅ Click géré */}
    </nav>
  );
}
