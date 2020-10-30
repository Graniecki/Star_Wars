import React, { useState, useEffect } from 'react';
import './Catalogue.css';

import { PlanetsCards } from '../PlanetsCards';
import { PlanetsContext } from '../PlanetsContext';

export const Catalogue = () => {
  const URL = 'https://swapi.dev/api/planets/';
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(array => setPlanets(array.results));
  }, []);

  return (
    <PlanetsContext.Provider value={planets}>
      <div className="catalogue">
        <PlanetsCards />
      </div>
    </PlanetsContext.Provider>
  );
};
