import React from 'react';
import './VisitorNotification.css';

export default function VisitorNotification({ onClose }) {
  return (
    <div className="visitor-notif">
      <span>
        You are now browsing as a guest.{' '}
        <a href="/landing" className="Create Account-link">Create Account</a> to unlock more features.
      </span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
}
