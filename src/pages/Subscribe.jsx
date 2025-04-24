import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // pour appeler signUp
import "./Subscribe.css";

const Subscribe = () => {
  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    gender: "Mr.",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    security: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword, security, email } = formData;

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (parseInt(security) !== 12) {
      return setError("Security code incorrect.");
    }

    try {
      signUp(email, password, formData); // enregistre dans localStorage
      setSuccess("Account created successfully ✅");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="subscribe-page">
      <header className="header">
        <div className="logo">🌍 TravelPlatform</div>
        <nav className="nav">
          <a href="/contact">Contact Us</a>
          <div className="booking-dropdown">
            <span>My Booking ▾</span>
            <div className="dropdown-content">
              <a href="/Login">Sign In</a>
              <a href="/subscribe">Subscribe</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="subscribe-form">
        <h2>Subscribe</h2>
        <form onSubmit={handleSubmit}>
          {/* champs du formulaire */}
          {/* ... mêmes inputs ... */}
          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Security Code: 7 + 5 = ?</label>
            <input type="text" name="security" onChange={handleChange} required />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <button type="submit" className="submit-btn">Create an account</button>
        </form>
      </main>
    </div>
  );
};

export default Subscribe;
