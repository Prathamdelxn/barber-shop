'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
   const user = JSON.parse(localStorage.getItem('user'));
console.log("Asdf", user);

    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Login function (store token)
  const login = (newToken,userdata) => {
    localStorage.setItem('token', newToken);
    console.log("new login",userdata);
   localStorage.setItem('user', JSON.stringify(userdata));

    setToken(newToken);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to access context
export const useAuth = () => useContext(AuthContext);
