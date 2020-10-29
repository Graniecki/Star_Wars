import React from 'react';
import './PlanetCard.css';

export const PlanetCard = ({ planet }) => {
  return (
    <div className="card">
      <h2>{planet.name}</h2>
      <p>{`Climate - ${planet.climate}`}</p>
      <p>{`Population - ${planet.population}`}</p>
    </div>
  );
};
