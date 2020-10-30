import React, { useContext } from 'react';
import './PlanetsCards.css';

import { PlanetCard } from '../PlanetCard';
import { PlanetsContext } from '../PlanetsContext';

export const PlanetsCards = () => {
  const planets = useContext(PlanetsContext);

  return (
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
