import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VisitDetails.css';
import ouzoud1 from '../assets/ouzoud.jpg';
import ouzoud2 from '../assets/ouzoud2.jpg';
import fes from '../assets/fes.jpg';
import fes1 from '../assets/fes1.jpg';
import desert from '../assets/desert.jpg';
import rabat from '../assets/rabat.jpg';
import marrakech from '../assets/jamaa-el-fna.jpg';
import marrakech1 from '../assets/jamaa-el-fena1.jpg';
import agadir from '../assets/agadir.jpg';
import tanger from '../assets/tanger.jpg';

const visites = [
  {
    id: 1,
    title: "Cascades d'Ouzoud",
    description: "Les Cascades d’Ouzoud sont l’un des sites naturels les plus remarquables du Maroc.",
    images: [ouzoud1, ouzoud2],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.317436201584!2d-6.722403284882862!3d32.015300881210226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38a762d4a9f15%3A0x35b40c1ae8ffb397!2sCascades%20d'Ouzoud!5e0!3m2!1sfr!2sma!4v1615370294442!5m2!1sfr!2sma",
    recommendations: ["Désert de Merzouga", "Médina de Fès"]
  },
  {
    id: 2,
    title: "Médina de Fès",
    description: "Un labyrinthe d'histoire, de culture et d'artisanat marocain ancien.",
    images: [fes, fes1],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26555.156427441267!2d-5.006112170214581!3d34.03715753879273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda30c2065a0c4e5%3A0x5c6e340babb1401e!2sM%C3%A9dina%20de%20F%C3%A8s!5e0!3m2!1sfr!2sma!4v1615370640280!5m2!1sfr!2sma",
    recommendations: ["Cascades d'Ouzoud"]
  },
  {
    id: 3,
    title: "Désert de Merzouga",
    description: "Explorez les grandes dunes à dos de chameau et passez la nuit sous les étoiles.",
    images: [desert],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17276.813327226946!2d-3.9766124036451746!3d31.099706775298477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9c5404b180b3bb%3A0x9ef230c9f9fc9de5!2sMerzouga!5e0!3m2!1sfr!2sma!4v1615370813549!5m2!1sfr!2sma",
    recommendations: ["Cascades d'Ouzoud"]
  },
  
  {
    id: 4,
    title: "Rabat",
    description: "Capitale historique et culturelle du Maroc.",
    images: [rabat],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1234567890123!2d-6.836123456789012!3d34.02012345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38a1234567890%3A0x1234567890abcdefg!2sRabat%20Maroc!5e0!3m2!1sfr!2sma!4v1615371234567",
    recommendations: ["Marrakech", "Agadir"]
  },
    {
        id: 5,
        title: "Marrakech",
        description: "Ville rouge au charme envoûtant.",
        images: [marrakech, marrakech1],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1234567890123!2d-7.987654321098765!3d31.63456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38a1234567890%3A0x1234567890abcdefg!2sMarrakech%20Maroc!5e0!3m2!1sfr!2sma!4v1615371234567",
        recommendations: ["Rabat", "Agadir"]
    },
    { id: 6,
        title: "Agadir",
            description: "Plages dorées et soleil éclatant.",
            images: [agadir],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1234567890123!2d-9.598765432109876!3d30.427890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38a1234567890%3A0x1234567890abcdefg!2sAgadir%20Maroc!5e0!3m2!1sfr!2sma!4v1615371234567",
            recommendations: ["Marrakech", "Rabat"]
        },
        {
            id: 7,
            title: "Tanger",
            description: "Port mythique entre mer et montagne.",
            images: [tanger],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1234567890123!2d-5.8012345678901234!3d35.76789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38a1234567890%3A0x1234567890abcdefg!2sTanger%20Maroc!5e0!3m2!1sfr!2sma!4v1615371234567",
            recommendations: ["Marrakech", "Agadir"]
        }

];


const VisitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const visit = visites.find(v => v.id === parseInt(id));

  if (!visit) return <p>Visite non trouvée</p>;

  return (
    <div className="visit-details">
      <h2>{visit.title}</h2>
      <p>{visit.description}</p>

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
          allowFullScreen=""
          loading="lazy"
          title="Carte Google Maps"
        ></iframe>
      </div>

      <button className="btn-reserver" onClick={() => navigate(`/reservation/${visit.id}`)}>
        Réserver
      </button>

      <div className="recommandations">
        <h3>Vous aimerez aussi :</h3>
        <ul>
          {visit.recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisitDetails;