import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccessDeniedModal.css';

export default function AccessDeniedModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="access-modal-overlay">
      <div className="access-modal-content">
        <button className="access-modal-close" onClick={onClose}>×</button>
        <div className="access-modal-icon">❌</div>
        <h2 className="access-modal-title">Access Denied</h2>
        <p className="access-modal-text">
          You need to log in or sign up to access this feature.
        </p>
        <div className="access-modal-buttons">
          <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
