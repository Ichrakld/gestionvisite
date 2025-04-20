import React from 'react';
import './PackagesPage.css';
import { Link } from 'react-router-dom';
import luxeImg     from '../assets/package-luxe.jpg';
import aventureImg from '../assets/package-aventure.jpg';
import familleImg  from '../assets/package-famille.jpg';
import plageImg    from '../assets/package-plage.jpg';


const packages = [
  {
    id: 1,
    title: "Package Luxe",
    image: luxeImg,
    price: "450 €",
    description: "Séjour de 5 nuits en hôtel 5 étoiles avec visites guidées, dîners raffinés et soins spa.",
    options: ["Vol A/R", "Dîner gastronomique", "Excursion privée"],
  },
  {
    id: 2,
    title: "Package Aventure",
    image: aventureImg,
    price: "300 €",
    description: "Partez à l'aventure avec des randonnées en montagne, bivouac et activités en plein air.",
    options: ["Vol A/R", "Hébergement en bivouac", "Guide de montagne"],
  },
  {
    id: 3,
    title: "Package Famille",
    image: familleImg ,
    price: "250 €",
    description: "Un package familial avec activités pour enfants, accès aux parcs d'attractions et visites culturelles.",
    options: ["Transfert aéroport", "Billets parcs", "Guide familial"],
  },
  {
    id: 4,
    title: "Package Plage",
    image: plageImg ,
    price: "200 €",
    description: "Séjour détente à la plage avec massages, sports nautiques et sorties en bateau.",
    options: ["Vol A/R", "Hébergement plage", "Excursion en bateau"],
  }
];

const PackagesPage = () => {
  return (
    <div className="packages-page">
      <h1>Nos Packages</h1>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <span className="price">{pkg.price}</span>
            <div className="options">
              <h4>Options incluses :</h4>
              <ul>
                {pkg.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            <Link to={`/package/${pkg.id}`} className="btn">Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
