import React, { useState, useEffect } from 'react';
import './Catalogue.css';

import { Switch, Route } from 'react-router-dom';

import { PlanetsCards } from '../PlanetsCards';
import { PlanetInfo } from '../PlanetInfo';


export const Catalogue = () => {
  const URL = 'http://swapi.dev/api/planets/';
  const [planets, setPlanets] = useState([]);

  // getting information from server
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(array => setPlanets(array.results));
  }, []);

  return (
    <div className="catalogue">
      <PlanetsCards planets={planets} />

      {/*adding path to universal component where will be
      display information about selected planet*/}
      <Switch>
        <Route exact path="/planet/:planetId" component={PlanetInfo} />
      </Switch>
    </div>
  );
};
