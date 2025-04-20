// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import './ForgotPassword.css'; // si tu veux ajouter du style

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // ici tu peux appeler une API ou afficher un message
    setMessage(`A reset link has been sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset your password</h2>
      <p>Enter your email to receive a password reset link.</p>

      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
