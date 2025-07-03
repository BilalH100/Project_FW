import React, { useState } from 'react';
import AccessDeniedModal from '../Components/AccessDeniedModal'; // adapte le chemin si nécessaire

export default function Header1({ onMenuToggle, isMenuOpen }) {
  const [showAccessDeniedModal, setShowAccessDeniedModal] = useState(false);

  const handleProfileClick = () => {
    setShowAccessDeniedModal(true);
  };

  const handleCloseModal = () => {
    setShowAccessDeniedModal(false);
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    backgroundColor: isMenuOpen ? '#b1aca5' : '#fdf6ec',
    boxShadow: isMenuOpen
      ? '0 4px 12px rgba(0,0,0,0.4)'
      : '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    userSelect: 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  const iconColor = isMenuOpen ? '#f5f5f5' : '#5a2a7e';
  const titleColor = isMenuOpen ? '#f5f5f5' : '#9BAE87';

  return (
    <header style={headerStyle}>
      <button
        onClick={onMenuToggle}
        style={{
          fontSize: '24px',
          cursor: 'pointer',
          border: 'none',
          backgroundColor: 'transparent',
          padding: '6px 10px',
          borderRadius: '6px',
          color: iconColor,
          transition: 'color 0.3s ease',
        }}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <h1
        style={{
          margin: 0,
          fontWeight: 'bold',
          color: titleColor,
          fontSize: '20px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          transition: 'color 0.3s ease',
        }}
      >
        Welcome Visitor
      </h1>

      <button
        style={{
          fontSize: '24px',
          color: iconColor,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.3s ease',
        }}
        aria-label="Profile"
        onClick={handleProfileClick}
      >
        👤
      </button>

      {showAccessDeniedModal && (
        <AccessDeniedModal onClose={handleCloseModal} />
      )}
    </header>
  );
}
