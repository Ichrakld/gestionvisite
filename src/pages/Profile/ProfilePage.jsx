import React, { useState } from 'react';
import ProfilePictureUpload from './ProfilePictureUpload';
import ProfileForm from './ProfileForm';
import './ProfilePage.css';

const ProfilePage = ({ initialUser }) => {
  const [user, setUser] = useState(initialUser);

  const handleImageUpload = (imageUrl) =>
    setUser(prev => ({ ...prev, profilePicture: imageUrl }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: envoyer vers API
    alert('Profil mis à jour 🎉');
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Profil {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h1>
      </header>

      <section className="profile-main">
        <aside className="profile-sidebar">
          <ProfilePictureUpload
            currentImage={user.profilePicture}
            onImageUpload={handleImageUpload}
          />
        </aside>

        <main className="profile-content">
          <form onSubmit={handleSubmit}>
            <ProfileForm user={user} setUser={setUser} />
            <button type="submit" className="btn-submit">
              Enregistrer
            </button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default ProfilePage;
