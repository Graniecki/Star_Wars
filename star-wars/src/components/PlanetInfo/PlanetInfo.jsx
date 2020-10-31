import React, { useEffect, useState } from 'react';
import './PlanetInfo.css';

export const PlanetInfo = ({ match }) => {
  const URL = 'https://swapi.dev/api/planets/';
  const { planetId } = match.params;

  const [planet, setPlanet] = useState([]);
  // const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetch(`${URL}${planetId}/`)
      .then(response => response.json())
      .then(array => setPlanet(array));
  }, [planetId]);

  return (
    <div className="planet-info">
      <p>{`Name - ${planet.name}`}</p>
      <p>{`Rotation period - ${planet["rotation_period"]}`}</p>
      <p>{`Diameter - ${planet.diameter}`}</p>
      <p>{`Climate - ${planet.climate}`}</p>
      <p>{`Gravity - ${planet.gravity}`}</p>
      <p>{`Terrain - ${planet.terrain}`}</p>
      <p>{`Population - ${planet.population}`}</p>
      <p>
        {`Residents - `}
      </p>
    </div>
  );
};
