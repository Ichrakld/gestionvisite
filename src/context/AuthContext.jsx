import React, { createContext, useContext, useState } from 'react';

// Mock DB pour l'exemple (dans la vraie app, utiliser un backend)
const initialUsers = [
  { username: 'admin1', password: 'pass123', role: 'admin' },
  { username: 'guide1', password: 'pass123', role: 'guide' },
  { username: 'agency1', password: 'pass123', role: 'agence' }
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signUp = (username, password) => {
    if (users.find(u => u.username === username)) {
      throw new Error('Ce nom d’utilisateur existe déjà.');
    }
    const newUser = { username, password, role: 'touriste' };
    setUsers([...users, newUser]);
    setUser(newUser);
    setError(null);
  };

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      setError(null);
      return;
    }
    throw new Error('Nom d’utilisateur ou mot de passe incorrect.');
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



