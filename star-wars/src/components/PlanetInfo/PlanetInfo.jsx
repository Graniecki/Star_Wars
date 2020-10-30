import React from 'react';
import './PlanetInfo.css';

export const PlanetInfo = ({ match }) => {
  const { planetId } = match.params;

  return (
    <div className="planet-info">
      <p>{planetId}</p>
    </div>
  );
};
