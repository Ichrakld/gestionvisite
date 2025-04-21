import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/log.jpg';
import ReactModal from 'react-modal';
import { useAuth } from '../context/AuthContext'; // 👉 IMPORT CONTEXTE

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuth(); // 👉 Récupérer le user et logout
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" onClick={openModal}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-item">Accueil</Link></li>
          <li><Link to="/visites" className="navbar-item">Visites</Link></li>
          <li><Link to="/excursions" className="navbar-item">Excursion</Link></li>
          <li><Link to="/Packages" className="navbar-item">Packages</Link></li>
          <li><Link to="/Transferts" className="navbar-item">Transferts</Link></li>
          <li><Link to="/Contact" className="navbar-item">Contact</Link></li>

          {/* Affichage du rôle et bouton de connexion/déconnexion */}
          {user ? (
            <>
              <li><Link to="/profile" className="navbar-item">Profil</Link></li>
              <li><button onClick={handleLogout} className="navbar-item logout-button">Déconnexion</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="navbar-item">Se connecter</Link></li>
              <li><Link to="/Subscribe" className="navbar-item">Inscription</Link></li>
            </>
          )}
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
          src="https://www.youtube.com/embed/hVvEISFw9w0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ReactModal>
    </nav>
  );
};

export default Navbar;
