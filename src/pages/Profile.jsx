import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  if (!user) {
    return <p>Vous devez être connecté pour voir votre profil.</p>;
  }

  const { role } = user;
  return (
    <div className="profile-container">
      <h2>Mon Profil</h2>
      <p>Rôle : <strong>{role}</strong></p>

      {role === 'touriste' && (
        <div>
          <h3>Mes Réservations</h3>
          {/* TODO: Afficher la liste de réservations */}
        </div>
      )}

      {role === 'guide' && (
        <div>
          <h3>Mes Visites Créées</h3>
          {/* TODO: Afficher la liste de visites */}
        </div>
      )}

      {role === 'agence' && (
        <div>
          <h3>Mes Partenariats</h3>
          {/* TODO: Afficher les partenariats */}
        </div>
      )}

      {role === 'admin' && (
        <div>
          <h3>Administration</h3>
          {/* TODO: Gérer utilisateurs et visites */}
        </div>
      )}

      <button className="btn-logout" onClick={() => logout()}>
        Se déconnecter
      </button>
    </div>
  );
};

export default Profile;
