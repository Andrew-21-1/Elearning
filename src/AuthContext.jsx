import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('token');
    const expiration = localStorage.getItem('tokenExpiration');
    return savedToken && expiration > Date.now() ? savedToken : null;
  });

  const login = (newToken, user, expiresIn) => {
    const expirationTime = Date.now() + expiresIn * 1000; // Convert to milliseconds
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokenExpiration', expirationTime);
    setToken(newToken);
    setUser(user);

    // Optional: Automatically log out after the expiration time
    setTimeout(() => logout(), expiresIn * 1000);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiration');
    setToken(null);
    setUser(null);
  };

  // Check for token expiration on initial load
  useEffect(() => {
    const expiration = localStorage.getItem('tokenExpiration');
    if (expiration && Date.now() > expiration) {
      logout(); // Automatically log out if token is expired
    }
  }, []);

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
