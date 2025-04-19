import React from 'react';
import { Link } from 'react-router-dom'; // Assure-toi d'importer Link
import bannerImage from '../assets/maroc.png';
import './Banner.css'; // pour le style

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Visite touristique" className="banner-img" />
      <div className="banner-content">
        <h1>Explorez les trésors touristiques du Maroc</h1>
        <p>Découvrez des sites inoubliables, réservez facilement, vivez l’expérience.</p>
        <Link to="/visites" style={{ textDecoration: 'none' }}>
          <button>Commencer la visite</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;


