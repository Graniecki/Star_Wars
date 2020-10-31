import React from 'react';
import './PlanetsCards.css';

import { PlanetCard } from '../PlanetCard';

export const PlanetsCards = ({ planets }) => {

  return (
    /*rendering cards of planets with some info*/
    <div className="planets-cards">
      {planets.map((planet, index) => (
        <PlanetCard
          key={planet.name}
          planet={planet}
          index={index}
        />
      ))}
    </div>
  );
};
