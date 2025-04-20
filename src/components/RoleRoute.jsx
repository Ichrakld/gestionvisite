import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Autorise l'accès uniquement si le rôle de l'utilisateur est dans allowedRoles.
 * Sinon renvoie vers une page de non-autorisé ou la home.
 */
const RoleRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RoleRoute;