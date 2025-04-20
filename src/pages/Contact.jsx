import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter l’envoi vers une API
    console.log(form);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback or suggestions, don’t hesitate to reach out to us. We'll get back to you as soon as possible.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" />
        </label>

        <label>
          Email
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Type your message here..." />
        </label>

        <button type="submit">Send Message</button>

        {submitted && <p className="confirmation">✅ Thank you for contacting us!</p>}
      </form>
    </div>
  );
};

export default Contact;
