import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VisitDetails.css';

import ouzoud1      from '../assets/ouzoud.jpg';
import ouzoud2      from '../assets/ouzoud2.jpg';
import fes          from '../assets/fes.jpg';
import fes1         from '../assets/fes1.jpg';
import desert       from '../assets/desert.jpg';
import rabat        from '../assets/rabat.jpg';
import marrakech    from '../assets/jamaa-el-fna.jpg';
import marrakech1   from '../assets/jamaa-el-fena1.jpg';
import agadir       from '../assets/agadir.jpg';
import tanger       from '../assets/tanger.jpg';

const visites = [
  {
    id: 1,
    title: "Cascades d'Ouzoud",
    description: "Les Cascades d’Ouzoud sont l’un des sites naturels les plus remarquables du Maroc.",
    images: [ouzoud1, ouzoud2],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Désert de Merzouga", "Médina de Fès"],
    inclusions: ["Transport aller-retour", "Guide local", "Déjeuner traditionnel"],
    options: [
      { name: "Cérémonie du thé", adult: 15, child: 10 },
      { name: "Lunch en terrasse", adult: 28, child: 18 }
    ],
    itineraire: [
      "08h00 : Départ de Marrakech",
      "10h30 : Arrivée aux cascades",
      "11h00 : Randonnée guidée",
      "13h00 : Déjeuner",
      "15h00 : Temps libre",
      "17h00 : Retour à Marrakech"
    ]
  },
  {
    id: 2,
    title: "Médina de Fès",
    description: "Un labyrinthe d'histoire, de culture et d'artisanat marocain ancien.",
    images: [fes, fes1],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Cascades d'Ouzoud"],
    inclusions: ["Guide francophone", "Entrée aux monuments"],
    options: [
      { name: "Visite privée", adult: 20, child: 0 },
      { name: "Thé chez l’habitant", adult: 5, child: 0 }
    ],
    itineraire: [
      "09h00 : RDV à la porte Bab Boujloud",
      "09h30 : Visite des souks",
      "11h00 : Découverte des ateliers",
      "12h30 : Pause thé",
      "14h00 : Balade libre",
      "16h00 : Fin de la visite"
    ]
  },
  {
    id: 3,
    title: "Désert de Merzouga",
    description: "Explorez les grandes dunes à dos de chameau et passez la nuit sous les étoiles.",
    images: [desert],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Cascades d'Ouzoud"],
    inclusions: ["Transport 4×4", "Nuit en bivouac", "Dîner berbère"],
    options: [
      { name: "Balade chamelière", adult: 30, child: 15 },
      { name: "Coucher de soleil VIP", adult: 25, child: 0 }
    ],
    itineraire: [
      "14h00 : Départ de Rissani",
      "16h00 : Arrivée à Merzouga",
      "17h00 : Balade chameau",
      "19h00 : Dîner et musique",
      "21h00 : Nuit à ciel ouvert",
      "06h00 : Lever du soleil"
    ]
  },
  {
    id: 4,
    title: "Rabat",
    description: "Capitale historique et culturelle du Maroc.",
    images: [rabat],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Marrakech", "Agadir"],
    inclusions: ["Transport A/R", "Guide officiel"],
    options: [
      { name: "Visite de la Kasbah", adult: 10, child: 0 },
      { name: "Musée d'art contemporain", adult: 8, child: 0 }
    ],
    itineraire: [
      "10h00 : Arrivée à la Tour Hassan",
      "11h00 : Mausolée Mohammed V",
      "12h30 : Déjeuner dans la médina",
      "14h00 : Visite du musée",
      "16h00 : Retour"
    ]
  },
  {
    id: 5,
    title: "Marrakech",
    description: "Ville rouge au charme envoûtant.",
    images: [marrakech, marrakech1],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Rabat", "Agadir"],
    inclusions: ["Guide local", "Transport en petit groupe"],
    options: [
      { name: "Palais Bahia", adult: 12, child: 0 },
      { name: "Jardins Majorelle", adult: 15, child: 0 }
    ],
    itineraire: [
      "09h00 : Place Jemaa el-Fna",
      "10h00 : Koutoubia",
      "11h00 : Jardins Majorelle",
      "12h30 : Déjeuner",
      "14h00 : Palais Bahia",
      "16h00 : Fin"
    ]
  },
  {
    id: 6,
    title: "Agadir",
    description: "Plages dorées et soleil éclatant.",
    images: [agadir],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Marrakech", "Rabat"],
    inclusions: ["Transfert privé", "Chalet 4★", "Petit-déjeuner"],
    options: [
      { name: "Jet-ski", adult: 40, child: 0 },
      { name: "Parasailing", adult: 30, child: 0 }
    ],
    itineraire: [
      "10h00 : Arrivée à la plage",
      "11h00 : Activités nautiques",
      "13h00 : Déjeuner buffet",
      "15h00 : Temps libre",
      "17h00 : Retour"
    ]
  },
  {
    id: 7,
    title: "Tanger",
    description: "Port mythique entre mer et montagne.",
    images: [tanger],
    map: "https://www.google.com/maps/embed?pb=…",
    recommendations: ["Marrakech", "Agadir"],
    inclusions: ["Transport A/R", "Guide privé"],
    options: [
      { name: "Grottes d’Hercule", adult: 10, child: 0 },
      { name: "Cap Spartel", adult: 8, child: 0 }
    ],
    itineraire: [
      "09h00 : Vieille médina",
      "10h30 : Grottes d’Hercule",
      "12h00 : Cap Spartel",
      "13h30 : Déjeuner",
      "15h00 : Retour"
    ]
  }
];

const VisitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const visit = visites.find(v => v.id === parseInt(id));

  if (!visit) return <p>Visite non trouvée</p>;

  const handleAddToCart = () => alert("Ajouté au panier !");
  const handleAddToWishlist = () => alert("Ajouté à la wishlist !");

  return (
    <div className="visit-details">
      <button className="btn-retour" onClick={() => navigate(-1)}>← Retour</button>

      <h2>{visit.title}</h2>
      <p className="desc">{visit.description}</p>

      <div className="gallery">
        {visit.images.map((img, i) => (
          <img key={i} src={img} alt={`${visit.title} ${i}`} />
        ))}
      </div>

      <div className="map-container">
        <iframe
          src={visit.map}
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          title="Carte"
        ></iframe>
      </div>

      {visit.inclusions && (
        <div className="section-block">
          <h3>Inclus</h3>
          <ul>
            {visit.inclusions.map((inc, i) => <li key={i}>✔️ {inc}</li>)}
          </ul>
        </div>
      )}

      {visit.options && (
        <div className="section-block">
          <h3>Options</h3>
          {visit.options.map((opt, i) => (
            <div key={i} className="option-line">
              {opt.name} <span>+{opt.adult} €</span>
            </div>
          ))}
        </div>
      )}

      {visit.itineraire && (
        <div className="section-block">
          <h3>Itinéraire</h3>
          <ol>
            {visit.itineraire.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      )}

      <div className="buttons">
        <button className="btn-reserver" onClick={() => navigate(`/reservation/${visit.id}`)}>
          Réserver maintenant
        </button>
        <button className="btn-panier" onClick={handleAddToCart}>🛒 Ajouter au panier</button>
        <button className="btn-wishlist" onClick={handleAddToWishlist}>❤️ Ajouter à la wishlist</button>
      </div>

      <div className="recommandations">
        <h3>Vous aimerez aussi :</h3>
        <ul>
          {visit.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default VisitDetails;
