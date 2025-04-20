import React, { useState } from "react";
import "./Subscribe.css"; // assure-toi d'avoir le fichier CSS

const Subscribe = () => {
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
    const { password, confirmPassword, security } = formData;

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (parseInt(security) !== 12) {
      return setError("Security code incorrect.");
    }

    setSuccess("Account created successfully ✅");
    // Tu peux ici envoyer les données à une API
    console.log(formData);
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
        <p className="info-text">
          To subscribe on our platform and to be able to register products that you like in your cart or to complete your reservations, please fill out the form below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} value={formData.gender}>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss</option>
            </select>
          </div>

          <div className="form-row">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Country</label>
            <input type="text" name="country" placeholder="Enter your country" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>City</label>
            <input type="text" name="city" placeholder="Enter your city" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Phone (Morocco +212)</label>
            <input type="tel" name="phone" placeholder="+212..." onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Enter your password again" onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Security Code: 7 + 5 = ?</label>
            <input type="text" name="security" placeholder="Calculate the sum" onChange={handleChange} required />
          </div>

          {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
          {success && <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>}

          <button type="submit" className="submit-btn">Create an account</button>
        </form>
      </main>
    </div>
  );
};

export default Subscribe;
