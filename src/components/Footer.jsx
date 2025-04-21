import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2025 Gestion Visites Touristiques - Tous droits réservés.</p>
      <p>Contact : <a href="mailto:contact@moroccantoptour.com">contact@moroccantoptour.com</a></p>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
