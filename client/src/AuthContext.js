import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const authToken = localStorage.getItem("paricollectiontoken");
   // const Userid = localStorage.getItem("paricollectionuserId");

  useEffect(() => {
    
    if (authToken) {
      if (authToken) {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [authToken]);
  
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("paricollectiontoken");
    localStorage.removeItem("paricollectionuserId");
    alert("signout succesfully")
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser,
     }}>
      {children}
    </AuthContext.Provider>
  );
};