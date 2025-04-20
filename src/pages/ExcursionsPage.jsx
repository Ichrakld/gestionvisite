import React from 'react';
import './ExcursionsPage.css';
import { Link } from 'react-router-dom';
import essaouiraImg from '../assets/essaouira1.jpg';
import ouzoudImg    from '../assets/ouzoud3.jpg';
import ourikaImg    from '../assets/ourika.jpg';
import agafayImg    from '../assets/agafay.jpg';

const excursions = [
  {
    id: 1,
    title: "Essaouira au départ de Marrakech",
    image: essaouiraImg,
    price: "105 €",
    description: "Découvrez la perle de l’Atlantique avec un guide local, visite de la médina, port, plage..."
  },
  {
    id: 2,
    title: "Ouzoud Falls",
    image: ouzoudImg,
    price: "89 €",
    description: "Explorez les cascades spectaculaires d’Ouzoud avec déjeuner traditionnel et balade nature."
  },
  {
    id: 3,
    title: "Vallée de l’Ourika",
    image: ourikaImg,
    price: "75 €",
    description: "Excursion dans les montagnes de l’Atlas, paysages verdoyants et visite de villages berbères."
  },
  {
    id: 4,
    title: "Désert d’Agafay",
    image: agafayImg,
    price: "130 €",
    description: "Dîner dans le désert, coucher de soleil et soirée traditionnelle sous les étoiles."
  }
];

const ExcursionsPage = () => {
  return (
    <div className="excursions-page">
      <h1>Nos Excursions</h1>
      <div className="excursion-grid">
        {excursions.map((ex) => (
          <div key={ex.id} className="excursion-card">
            <img src={ex.image} alt={ex.title} />
            <h3>{ex.title}</h3>
            <p>{ex.description}</p>
            <span className="price">{ex.price}</span>
            <Link to={`/excursion/${ex.id}`} className="btn">Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcursionsPage;
