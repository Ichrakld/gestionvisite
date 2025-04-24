// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/log.jpg';
import ReactModal from 'react-modal';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import cartIcon from '../assets/cart.png';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
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
          <li><Link to="/excursions" className="navbar-item">Excursions</Link></li>
          <li><Link to="/packages" className="navbar-item">Packages</Link></li>
          <li><Link to="/transferts" className="navbar-item">Transferts</Link></li>
          <li><Link to="/contact" className="navbar-item">Contact</Link></li>

          {user ? (
            <>
              <li><Link to="/profile" className="navbar-item">Profil</Link></li>
              <li>
                <Link to="/cart" className="navbar-item cart-link">
                  <img src={cartIcon} alt="Panier" />
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="navbar-item logout-button">
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="navbar-item">Se connecter</Link></li>
              <li><Link to="/subscribe" className="navbar-item">Inscription</Link></li>
            </>
          )}
        </ul>
      </div>

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
          title="Vidéo Maroc"
        />
      </ReactModal>
    </nav>
  );
};

export default Navbar;
