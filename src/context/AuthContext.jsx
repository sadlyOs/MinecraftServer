// contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect, use } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Проверяем наличие токена при загрузке приложения
  useEffect(() => {
    // const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);


    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // localStorage.setItem("token", token);
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // localStorage.removeItem('token');
    localStorage.removeItem("user");
    setUser(null);
  };



  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
