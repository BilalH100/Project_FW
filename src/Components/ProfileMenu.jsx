import React, { useState, useRef, useEffect } from 'react';
import './ProfileMenu.css';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={menuRef}>
      <img
        src="/images/profile-icon.png" // remplace par ton icône
        alt="Profile"
        className="profile-icon"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-item">
            <span role="img" aria-label="settings">⚙️</span> Settings
          </div>
          <div className="profile-item">
            <span role="img" aria-label="contact">❓</span> Contact Us
          </div>
          <div className="profile-item" onClick={() => alert("Logging out...")}>
            <span role="img" aria-label="logout">↩️</span> Log Out
          </div>
        </div>
      )}
    </div>
  );
}
