import React from 'react';
import './PlanetCard.css';

import { Link } from 'react-router-dom';

export const PlanetCard = ({ planet, index }) => {
  return (
    <div className="card">
      <h2>
        <Link to={`/planet/${index + 1}`} >{planet.name}</Link>
      </h2>
      <p>{`Climate: ${planet.climate}`}</p>
      <p>
        {`Population: ${planet.population !== 'unknown'
          ? planet.population
          : 'Information about the population on this planet is unknown'
        }`}
      </p>
    </div>
  );
};
