import React from 'react';

const UserProfileCard = ({ user }) => {
  return (
    <div style={{
      width: 300,
      border: '1px solid #ccc',
      padding: 20,
      borderRadius: 10,
      textAlign: 'center',
      boxShadow: '0 0 10px #ddd',
      margin: '20px auto'
    }}>
      <img
        src={user.profilePicture || "https://via.placeholder.com/150"}
        alt="Profil"
        style={{ width: 150, borderRadius: '50%' }}
      />
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <button style={{ marginTop: 10 }}>Modifier</button>
    </div>
  );
};

export default UserProfileCard;
