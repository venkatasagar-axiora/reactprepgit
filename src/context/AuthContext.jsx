// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("mock_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // MOCK LOGIN
    if (email && password) {
      const fakeUser = {
        id: 1,
        name: "Venkata Sagar",
        email,
        role: "Admin",
      };

      setUser(fakeUser);

      localStorage.setItem(
        "mock_user",
        JSON.stringify(fakeUser)
      );

      return {
        success: true,
      };
    }

    return {
      success: false,
      message: "Invalid credentials",
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mock_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);