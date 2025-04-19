import React from 'react';
import { useNavigate } from 'react-router-dom';
import ouzoud from '../assets/ouzoud.jpg';
import fes from '../assets/fes.jpg';
import desert from '../assets/desert.jpg';
import rabat from '../assets/rabat.jpg';
import marrakech from '../assets/jamaa-el-fna.jpg';
import agadir from '../assets/agadir.jpg';
import tanger from '../assets/tanger.jpg';
import './VisitesPage.css';
import VisitCard from '../components/VisitCard';

const visites = [
  {
    id: '1',
    title: "Cascades d'Ouzoud",
    image: ouzoud,
    description: "Une merveille naturelle au cœur de l'Atlas.",
  },
  {
    id: '2',
    title: "Médina de Fès",
    image: fes,
    description: "Plongez dans l'histoire millénaire.",
  },
  {
    id: '3',
    title: "Désert de Merzouga",
    image: desert,
    description: "Explorez les dunes dorées à dos de chameau.",
  },
  
  {
    id: '4',
    title: "Rabat",
    image: rabat,
    description: "Capitale historique et culturelle.",
  },
  {
    id: '5',
    title: "Marrakech",
    image: marrakech,
    description: "Ville rouge au charme envoûtant.",
  },
  {
    id: '6',
    title: "Agadir",
    image: agadir,
    description: "Plages dorées et soleil éclatant.",
  },
  {
    id: '7',
    title: "Tanger",
    image: tanger,
    description: "Port mythique entre mer et montagne.",
  }

];

const VisitesPage = () => {
    return (
      <div className="visites-container">
        <h2>Nos Visites</h2>
        <div className="visites-grid">
          {visites.map((visit) => (
            <VisitCard
              key={visit.id}
              id={visit.id}
              title={visit.title}
              image={visit.image}
              description={visit.description}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default VisitesPage;