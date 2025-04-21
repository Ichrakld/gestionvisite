import React from 'react';
import './Transferts.css';

import marrakechCasa from '../assets/marrakech-casablanca.jpg';
import agadirMarrakech from '../assets/agadir-marrakech.jpg';
import fesMerzouga from '../assets/fes-merzouga.jpg';
import whatsappIcon from '../assets/whatsapp.png';

const Transferts = () => {
  return (
    <div className="transferts-page">
      <h1 className="transferts-title">Nos Transferts Privés au Maroc</h1>
      <p className="transferts-intro">
        Nous vous proposons des transferts privés confortables, sûrs et ponctuels dans tout le Royaume. Réservez dès maintenant votre trajet avec un chauffeur professionnel.
      </p>

      <div className="transfert-list">

        <div className="transfert-card">
          <img src={marrakechCasa} alt="Transfert Marrakech-Casablanca" />
          <div className="transfert-info">
            <h2>Marrakech ➔ Casablanca</h2>
            <p>Durée estimée : 2h45 | Véhicule privé climatisé | Chauffeur expérimenté</p>
            <span className="price">À partir de 600 MAD</span>
          </div>
        </div>

        <div className="transfert-card">
          <img src={agadirMarrakech} alt="Transfert Agadir-Marrakech" />
          <div className="transfert-info">
            <h2>Agadir ➔ Marrakech</h2>
            <p>Durée estimée : 3h30 | Véhicule confortable | Pause possible sur le trajet</p>
            <span className="price">À partir de 700 MAD</span>
          </div>
        </div>

        <div className="transfert-card">
          <img src={fesMerzouga} alt="Transfert Fès-Merzouga" />
          <div className="transfert-info">
            <h2>Fès ➔ Merzouga</h2>
            <p>Durée estimée : 7h | Vue panoramique sur les montagnes | Halte repas incluse</p>
            <span className="price">À partir de 1200 MAD</span>
          </div>
        </div>

      </div>

      <div className="reservation-form">
        <h3>Réservez votre transfert</h3>
        <form>
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Adresse email" required />
          <input type="text" placeholder="Départ" required />
          <input type="text" placeholder="Destination" required />
          <input type="date" required />
          <textarea placeholder="Informations supplémentaires..." rows="4"></textarea>
          <button type="submit">Envoyer la demande</button>
        </form>
      </div>

      <div className="map-container">
        <h3>Zones desservies au Maroc</h3>
        <iframe
          title="map-maroc"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5409490.666036858!2d-9.555271429491466!3d31.71952574761001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef421f75e68d%3A0xb7e6a46ed07d17c4!2sMaroc!5e0!3m2!1sfr!2sma!4v1713696244466!5m2!1sfr!2sma"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <a
        href="https://wa.me/212600000000"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Transferts;
