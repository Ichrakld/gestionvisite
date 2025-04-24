import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PackageDetails.css';
import { useCart } from '../context/CartContext';

import luxeImg     from '../assets/package-luxe.jpg';
import aventureImg from '../assets/package-aventure.jpg';
import familleImg  from '../assets/package-famille.jpg';
import plageImg    from '../assets/package-plage.jpg';



const packageData = {
  1: {
    title: "Pack 3 jours à Marrakech",
    image: luxeImg,
    days: 3,
    price: 299,
    description:
      "Un séjour de 3 jours à Marrakech incluant hôtel 5 étoiles, excursions guidées et expériences culinaires raffinées.",
    included: [
      "2 nuits d’hôtel 5★ avec petit-déjeuner",
      "Transferts A/R aéroport",
      "Visite de la médina et jardins Majorelle",
      "Dîner gastronomique au restaurant traditionnel"
    ],
    options: [
      { name: "Spa & hammam", price: 50 },
      { name: "Excursion vallée de l’Ourika", price: 40 }
    ],
    itinerary: [
      "Jour 1 : Arrivée et détente au riad, dîner d’accueil",
      "Jour 2 : Visite guidée de la médina et des jardins Majorelle",
      "Jour 3 : Excursion dans la vallée de l’Ourika et retour"
    ],
    meetingPlace: "Aéroport de Marrakech",
    maxPeople: 10
  },
  2: {
    title: "Pack Atlas & Désert - 5 jours",
    image: aventureImg,
    days: 5,
    price: 599,
    description:
      "Combinez aventure et culture : montagnes de l’Atlas, villages berbères et nuit sous les étoiles dans le désert de Merzouga.",
    included: [
      "4 nuits en hôtel et bivouac",
      "Transport privé 4×4",
      "Guide francophone",
      "Petit-déjeuner et dîner inclus"
    ],
    options: [
      { name: "Balade chamelière", price: 30 },
      { name: "Dîner berbère sous tente", price: 25 }
    ],
    itinerary: [
      "Jour 1 : Marrakech → Imlil, nuit en auberge",
      "Jour 2 : Trek dans l’Atlas, nuit en village berbère",
      "Jour 3 : Route vers Merzouga, bivouac dans les dunes",
      "Jour 4 : Lever de soleil et retour vers Ouarzazate",
      "Jour 5 : Retour à Marrakech"
    ],
    meetingPlace: "Riad à Marrakech",
    maxPeople: 8
  },
  3: {
    title: "Pack Famille - 4 jours",
    image: familleImg,
    days: 4,
    price: 350,
    description:
      "Séjour en famille avec visites adaptées aux enfants : palmeraie, zoo, parc aquatique et ateliers créatifs.",
    included: [
      "3 nuits en hôtel familial",
      "Billets pour le zoo de Marrakech",
      "Accès au parc aquatique",
      "Atelier poterie pour enfants"
    ],
    options: [
      { name: "Baby-sitting", price: 20 },
      { name: "Cours de cuisine marocaine", price: 35 }
    ],
    itinerary: [
      "Jour 1 : Accueil et atelier poterie",
      "Jour 2 : Visite du zoo de Marrakech",
      "Jour 3 : Journée parc aquatique",
      "Jour 4 : Cours de cuisine et départ"
    ],
    meetingPlace: "Hôtel familial à Marrakech",
    maxPeople: 12
  },
  4: {
    title: "Pack Plage - 2 jours",
    image: plageImg,
    days: 2,
    price: 200,
    description:
      "Détente à la plage d’Essaouira avec transport, hébergement en bord de mer et sports nautiques inclus.",
    included: [
      "1 nuit en hôtel 4★ face à la mer",
      "Transfert A/R",
      "Petit-déjeuner et déjeuner",
      "Kayak et paddle inclus"
    ],
    options: [
      { name: "Massage sur la plage", price: 30 },
      { name: "Dîner fruits de mer", price: 45 }
    ],
    itinerary: [
      "Jour 1 : Départ Marrakech → Essaouira, installation et sports nautiques",
      "Jour 2 : Temps libre sur la plage et retour à Marrakech"
    ],
    meetingPlace: "Devant votre hôtel à Marrakech",
    maxPeople: 10
  }
};

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packageData[id];
  const { addToCart } = useCart(); // Hook personnalisé

  if (!pkg) return <p>Package non trouvé.</p>;

  const handleAddToCart = () => {
    const item = {
      id,
      title: pkg.title,
      image: pkg.image,
      price: pkg.price,
      quantity: 1,
      type: 'package'
    };
    addToCart(item);
  };

  return (
    <div className="package-details">
      <h1>{pkg.title}</h1>
      <img src={pkg.image} alt={pkg.title} className="main-image" />

      <p className="desc">{pkg.description}</p>

      <div className="info-block">
        <h3>Inclus</h3>
        <ul>
          {pkg.included.map((item, i) => <li key={i}>✔ {item}</li>)}
        </ul>
      </div>

      <div className="info-block">
        <h3>Options supplémentaires</h3>
        <ul>
          {pkg.options.map((opt, i) => (
            <li key={i}>{opt.name} — +{opt.price} €</li>
          ))}
        </ul>
      </div>

      <div className="info-block">
        <h3>Itinéraire</h3>
        <ol>
          {pkg.itinerary.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>

      <div className="practical">
        <p><strong>Durée :</strong> {pkg.days} jours</p>
        <p><strong>Rendez-vous :</strong> {pkg.meetingPlace}</p>
        <p><strong>Participants max :</strong> {pkg.maxPeople}</p>
        <p><strong>Prix :</strong> {pkg.price.toFixed(2)} €</p>
      </div>

      <div className="actions">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Ajouter au panier
        </button>

        <Link to={`/reservation/${id}`} className="reserve-btn">
          Réserver ce pack
        </Link>
      </div>
    </div>
  );
};

export default PackageDetails;
