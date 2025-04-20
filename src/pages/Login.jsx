import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setSubmitted(true);
      navigate('/visites'); // ou la page que tu veux
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <p>Access your account to view bookings or manage your wishlist.</p>

      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error-msg">{error}</p>}

        <label>
          E-mail
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>

        <button type="submit">Login</button>

        {submitted && <p className="login-success">✅ Login successful!</p>}
      </form>

      <div className="login-extra">
        <p>Don't have an account? <Link to="/subscribe">Create one here</Link>.</p>
        <p><Link to="/forgot-password">Forgot your password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
