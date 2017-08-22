import React from 'react';
import LandingPage from './Landing_Page';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={ LandingPage } />
  </div>
);

export default App;
