// src/Routes/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isGuest = localStorage.getItem('isGuest') === 'true';

  if (isGuest) {
    alert("Access denied. Please log in to access this page.");
    return <Navigate to="/visitor" />;
  }

  return children;
}
