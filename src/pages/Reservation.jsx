import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    date: '',
    personnes: 1,
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour la visite ${id}`);
    // Ici tu peux envoyer les données à ton backend
  };

  return (
    <div className="reservation-container">
      <h2>Réserver la visite #{id}</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>Nom complet:</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Date de la visite:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Nombre de personnes:</label>
        <input
          type="number"
          name="personnes"
          value={formData.personnes}
          min="1"
          onChange={handleChange}
          required
        />

        <button type="submit">Confirmer la réservation</button>
      </form>
    </div>
  );
};

export default Reservation;
