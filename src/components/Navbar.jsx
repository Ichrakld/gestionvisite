import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/log.jpg';
import ReactModal from 'react-modal';

const Navbar = () => {
  // État pour contrôler l'ouverture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" onClick={openModal}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-item">Accueil</Link></li>
          <li><Link to="/" className="navbar-item">Visites</Link></li>
          <li><Link to="/" className="navbar-item">Excursion</Link></li>
          <li><Link to="/" className="navbar-item">Packages</Link></li>
          <li><Link to="/" className="navbar-item">Transferts</Link></li>
          <li><Link to="/" className="navbar-item">Contact</Link></li>
        </ul>
      </div>

      {/* Modal de la vidéo */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Vidéo des Villes du Maroc"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">X</button>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/hVvEISFw9w0" // Remplace par l'ID de la vidéo YouTube
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ReactModal>
    </nav>
  );
};

export default Navbar;



