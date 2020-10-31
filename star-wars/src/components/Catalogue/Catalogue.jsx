import React, { useState, useEffect } from 'react';
import './Catalogue.css';

import { Switch, Route } from 'react-router-dom';

import { PlanetsCards } from '../PlanetsCards';
import { PlanetInfo } from '../PlanetInfo';

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
      <Switch>
        <Route exact path="/planet/:planetId" component={PlanetInfo} />
      </Switch>
    </div>
  );
};
