import React from 'react';
import './PlanetCard.css';

import { Link } from 'react-router-dom';

//card where display short info about planet
//preview card
export const PlanetCard = ({ planet, index }) => {
  return (
    <div className="card">
      <h2>
        {/*adding links to each header for routing*/}
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
