import React from 'react';
import ProfilePage from './ProfilePage';

const GuideProfile = () => {
  const guideData = {
    name: 'Guide',
    email: 'guide@example.com',
    phone: '',
    role: 'guide',
    bio: 'Expert local pour les visites',
    password: '',
    profilePicture: ''
  };

  return <ProfilePage initialUser={guideData} />;
};

export default GuideProfile;
