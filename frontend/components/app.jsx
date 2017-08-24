import React from 'react';
import LandingPageContainer from './landing_page_container';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={ LandingPageContainer } />
  </div>
);

export default App;
