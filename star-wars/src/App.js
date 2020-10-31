import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Catalogue } from './components/Catalogue';

function App() {
  return (
    <Router>
      <div className="App">
        <Catalogue />
      </div>
    </Router>
  );
}

export default App;
