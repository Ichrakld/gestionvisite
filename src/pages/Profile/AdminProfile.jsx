import React from 'react';
import ProfilePage from './ProfilePage';

const AdminProfile = () => {
  const adminData = {
    name: 'Admin',
    email: 'admin@example.com',
    phone: '',
    role: 'admin',
    bio: 'Responsable de la plateforme',
    password: '',
    profilePicture: ''
  };

  return <ProfilePage initialUser={adminData} />;
};

export default AdminProfile;
