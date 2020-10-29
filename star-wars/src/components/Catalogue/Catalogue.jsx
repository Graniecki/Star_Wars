import React, { useEffect } from 'react';
import './Catalogue.css';

import { PlanetsCards } from '../PlanetsCards';

export const Catalogue = () => {
  const URL = 'https://swapi.dev/api/planets/';
  const planets = [];

  const getPlanetInfo = () => {
    fetch(URL)
      .then(response => response.json())
      .then(array => {
        planets.push(...array.results);
      });
  };

  useEffect(() => {
    getPlanetInfo();
  }, []);

  return (
    <div className="catalogue">
      <PlanetsCards />
    </div>
  );
};
