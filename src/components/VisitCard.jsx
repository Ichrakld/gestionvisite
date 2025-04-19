import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VisitCard.css';

const VisitCard = ({ id, title, image, description }) => {
  const navigate = useNavigate();

  return (
    <div className="visit-card" onClick={() => navigate(`/visite/${id}`)}>
      <img src={image} alt={title} />
      <div className="visit-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VisitCard;
