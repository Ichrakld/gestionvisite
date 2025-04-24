import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileAdmin from './Profile/AdminProfile';
import ProfileGuide from './Profile/GuideProfile';
import ProfileTourist from './Profile/TouristProfile';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Veuillez vous connecter.</p>;

  switch (user.role) {
    case 'admin':
      return <ProfileAdmin />;
    case 'guide':
      return <ProfileGuide />;
    case 'touriste':
      return <ProfileTourist />;
    default:
      return <p>Rôle inconnu</p>;
  }
};

export default Profile;
