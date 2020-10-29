import React, { useState, useEffect } from 'react';
import './Catalogue.css';

import { PlanetsCards } from '../PlanetsCards';

export const Catalogue = () => {
  const URL = 'https://swapi.dev/api/planets/';
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(array => setPlanets(array.results));
  }, []);

  return (
    <div className="catalogue">
      <PlanetsCards planets={planets} />
    </div>
  );
};
