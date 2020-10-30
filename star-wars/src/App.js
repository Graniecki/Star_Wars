import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Catalogue } from './components/Catalogue';
import { PlanetInfo } from './components/PlanetInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Catalogue />
      </div>
      <Switch>
        <Route exact path="/planet/:planetId" component={PlanetInfo} />
      </Switch>
    </Router>
  );
}

export default App;
