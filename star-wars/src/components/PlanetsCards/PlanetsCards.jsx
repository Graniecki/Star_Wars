import React from 'react';
import './PlanetsCards.css';

import { PlanetCard } from '../PlanetCard';

export const PlanetsCards = ({ planets }) => {
  return (
    <div className="planets-cards">
      {planets.map(planet => (
        <PlanetCard
          key={planet.name}
          planet={planet}
        />
      ))}
    </div>
  );
};
