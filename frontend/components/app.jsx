import React from 'react';
import LandingPage from './landing_page';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={ LandingPage } />
  </div>
);

export default App;
