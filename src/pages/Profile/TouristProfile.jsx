import React from 'react';
import ProfilePage from './ProfilePage';

const TouristProfile = () => {
  const touristData = {
    name: 'Touriste',
    email: 'touriste@example.com',
    phone: '',
    role: 'touriste',
    bio: 'Passionné de découvertes',
    password: '',
    profilePicture: ''
  };

  return <ProfilePage initialUser={touristData} />;
};

export default TouristProfile;
