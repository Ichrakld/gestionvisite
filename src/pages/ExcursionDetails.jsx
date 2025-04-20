import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ExcursionDetails.css';

import essaouiraImg from '../assets/essaouira1.jpg';
import ouzoudImg from '../assets/ouzoud3.jpg';
import ourikaImg  from '../assets/ourika.jpg';
import agafayImg  from '../assets/agafay.jpg';

const detailsData = {
  1: {
    title: "Essaouira au départ de Marrakech",
    image: essaouiraImg,
    price: 105,
    description:
      "Partez pour une journée à Essaouira, ville côtière au charme unique. Visite de la médina, du port, temps libre sur la plage et dégustation de fruits de mer.",
    included: [
      "Transport aller-retour en minibus climatisé",
      "Guide professionnel francophone",
      "Visite de la médina et du port"
    ],
    options: [
      { name: "Cérémonie du thé", adult: 15, child: 10 },
      { name: "Déjeuner local", adult: 32, child: 23 }
    ],
    itinerary: [
      "08:00 – Départ de Marrakech",
      "10:30 – Arrivée à Essaouira",
      "11:00 – Visite guidée de la médina et du port",
      "13:00 – Déjeuner (optionnel)",
      "14:30 – Temps libre / shopping",
      "16:00 – Retour vers Marrakech",
      "18:30 – Arrivée à Marrakech"
    ],
    duration: "8h30",
    departureTime: "08:00",
    returnTime: "18:30",
    meetingPlace: "Hall de votre hôtel à Marrakech",
    maxPeople: 12
  },
  2: {
    title: "Cascades d’Ouzoud",
    image: ouzoudImg,
    price: 89,
    description:
      "Explorez les plus hautes chutes d'eau du Maroc à Ouzoud. Randonnée, baignade possible et déjeuner traditionnel au bord de la rivière.",
    included: [
      "Transport en minibus climatisé",
      "Guide local",
      "Entrée au site des cascades"
    ],
    options: [
      { name: "Balade en bateau", adult: 10, child: 5 },
      { name: "Thé et pâtisseries berbères", adult: 8, child: 5 }
    ],
    itinerary: [
      "09:00 – Départ de Marrakech",
      "11:30 – Arrivée aux cascades d’Ouzoud",
      "12:00 – Randonnée et visite",
      "13:30 – Déjeuner en terrasse",
      "15:00 – Balade en bateau (option)",
      "17:00 – Retour à Marrakech",
      "19:30 – Arrivée"
    ],
    duration: "10h30",
    departureTime: "09:00",
    returnTime: "19:30",
    meetingPlace: "Devant votre hôtel à Marrakech",
    maxPeople: 15
  },
  3: {
    title: "Vallée de l’Ourika",
    image: ourikaImg,
    price: 75,
    description:
      "Vivez une escapade nature dans la vallée de l’Ourika, au pied de l’Atlas. Découverte de villages berbères et des bergeries traditionnelles.",
    included: [
      "Transport A/R",
      "Guide local",
      "Visite d’un village berbère"
    ],
    options: [
      { name: "Randonnée prolongée", adult: 20, child: 15 },
      { name: "Thé chez l’habitant", adult: 12, child: 8 }
    ],
    itinerary: [
      "09:00 – Départ de Marrakech",
      "10:00 – Arrivée dans la vallée",
      "10:30 – Visite d’un village berbère",
      "12:00 – Déjeuner traditionnel (optionnel)",
      "13:30 – Balade au bord de la rivière",
      "15:00 – Retour à Marrakech",
      "16:00 – Arrivée"
    ],
    duration: "7h",
    departureTime: "09:00",
    returnTime: "16:00",
    meetingPlace: "Riad/hôtel Marrakech",
    maxPeople: 10
  },
  4: {
    title: "Désert d’Agafay",
    image: agafayImg,
    price: 130,
    description:
      "Découvrez le désert d’Agafay pour un dîner sous les étoiles, balade en 4×4 et spectacle traditionnel autour du feu.",
    included: [
      "4×4 privé",
      "Dîner traditionnel",
      "Spectacle de danse berbère"
    ],
    options: [
      { name: "Balade en dromadaire", adult: 25, child: 15 },
      { name: "Coucher de soleil VIP", adult: 30, child: 20 }
    ],
    itinerary: [
      "14:00 – Départ en 4×4 depuis Marrakech",
      "15:00 – Arrivée dans le désert d’Agafay",
      "16:00 – Balade en dromadaire (option)",
      "17:30 – Coucher de soleil",
      "18:30 – Dîner et spectacle",
      "20:30 – Retour à Marrakech",
      "22:00 – Arrivée"
    ],
    duration: "8h",
    departureTime: "14:00",
    returnTime: "22:00",
    meetingPlace: "Devant votre riad/hôtel",
    maxPeople: 8
  }
};

const ExcursionDetails = () => {
  const { id } = useParams();
  const data = detailsData[id];

  if (!data) return <p>Excursion non trouvée.</p>;

  return (
    <div className="excursion-details">
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} className="main-image" />

      <p className="desc">{data.description}</p>

      <div className="info-block">
        <h3>Inclus</h3>
        <ul>
          {data.included.map((inc, i) => <li key={i}>✔ {inc}</li>)}
        </ul>
      </div>

      <div className="info-block">
        <h3>Options</h3>
        <ul>
          {data.options.map((opt, i) =>
            <li key={i}>{opt.name} — Adulte +{opt.adult}€ / Enfant +{opt.child}€</li>
          )}
        </ul>
      </div>

      <div className="info-block">
        <h3>Itinéraire</h3>
        <ol>
          {data.itinerary.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>

      <div className="practical">
        <p><strong>Durée :</strong> {data.duration}</p>
        <p><strong>Départ :</strong> {data.departureTime}</p>
        <p><strong>Retour :</strong> {data.returnTime}</p>
        <p><strong>Rendez-vous :</strong> {data.meetingPlace}</p>
        <p><strong>Participants max :</strong> {data.maxPeople}</p>
        <p><strong>Prix :</strong> {data.price.toFixed(2)} €</p>
      </div>

      <Link to={`/reservation/${id}`} className="reserve-btn">
        Réserver maintenant
      </Link>
    </div>
  );
};

export default ExcursionDetails;
