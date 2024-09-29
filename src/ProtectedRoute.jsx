import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the import path accordingly

const ProtectedRoute = ({ children }) => {
  const { token, user } = useAuth();

  // Function to check token validity (assuming you have expiration logic)
  const isTokenValid = () => {
    // You can store expiration time in local storage or context
    const expirationTime = localStorage.getItem('tokenExpiration');
    return expirationTime && Date.now() < expirationTime;
  };

  if (!token || !user || !isTokenValid()) {
    // Redirect to home page if not logged in or token is invalid
    return <Navigate to="/" />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
