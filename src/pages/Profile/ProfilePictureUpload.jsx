import React, { useState } from 'react';

const ProfilePictureUpload = ({ onImageUpload, currentImage }) => {
  const [preview, setPreview] = useState(currentImage);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onImageUpload(url);
  };

  return (
    <div className="profile-picture-upload">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="profile-picture-preview"
        />
      )}
    </div>
  );
};

export default ProfilePictureUpload;

