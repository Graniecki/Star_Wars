import React, { useEffect, useState } from 'react';
import './PlanetInfo.css';

import { ResidentsInfo } from '../ResidentsInfo';
import { PagesNavigation } from '../PagesNavigation';

//this component contain detailed information
//about selected planet
export const PlanetInfo = ({ match }) => {
  const URL = 'https://swapi.dev/api/planets/';
  const { planetId } = match.params;
  const [planet, setPlanet] = useState([]);
  const [residents, setResident] = useState([]);

  //fetching data from server for each specific id (planet)
  useEffect(() => {
    fetch(`${URL}${planetId}/`)
      .then(response => response.json())
      .then(array => {
        setPlanet(array);
        setResident(array.residents);
      });
  }, [planetId]);

  return (
    <>
      <div className="planet-info">
        <p>{`Name - ${planet.name}`}</p>
        <p>{`Rotation period - ${planet["rotation_period"]}`}</p>
        <p>{`Diameter - ${planet.diameter}`}</p>
        <p>{`Climate - ${planet.climate}`}</p>
        <p>{`Gravity - ${planet.gravity}`}</p>
        <p>{`Terrain - ${planet.terrain}`}</p>
        <p>
          {/*checking that planet has info about population */}
          {`Population: ${planet.population !== 'unknown'
            ? planet.population
            : 'Information about the population on this planet is unknown'
          }`}
        </p>
        {/*create specific component where display info
        about all residents of planet */}
        <ResidentsInfo residents={residents} />
      </div>
      {/*navigation component to move between pages */}
      <PagesNavigation planetId={planetId} />
    </>
  );
};
