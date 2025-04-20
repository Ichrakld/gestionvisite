// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // On conserve les users dans localStorage pour simuler une DB
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('users');
    return stored
      ? JSON.parse(stored)
      : [
          { email: 'admin@site.com', password: 'pass123', role: 'admin' },
          { email: 'guide1@site.com', password: 'pass123', role: 'guide' },
          { email: 'agency1@site.com', password: 'pass123', role: 'agence' }
        ];
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Inscription
  const signUp = (email, password) => {
    if (users.find(u => u.email === email)) {
      throw new Error('Cette adresse e-mail est déjà utilisée.');
    }
    const newUser = { email, password, role: 'touriste' };
    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
  };

  // Connexion
  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      throw new Error('E-mail ou mot de passe incorrect.');
    }
    setUser(found);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
