import React from 'react';

const ProfileForm = ({ user, setUser }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-form">
      {[
        { label: 'Nom', name: 'name', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Téléphone', name: 'phone', type: 'text' },
      ].map(field => (
        <div className="form-group" key={field.name}>
          <label>{field.label} :</label>
          <input
            type={field.type}
            name={field.name}
            value={user[field.name]}
            onChange={handleChange}
            required={field.name !== 'phone'}
          />
        </div>
      ))}

      <div className="form-group">
        <label>Rôle :</label>
        <input type="text" value={user.role} disabled />
      </div>

      <div className="form-group">
        <label>Bio :</label>
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Mot de passe :</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProfileForm;

