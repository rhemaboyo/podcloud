import React from 'react';
import LandingPageContainer from './landing_page_container';
import TrackIndex from './track_index';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={ LandingPageContainer } />
    <Route exact path="/stream" component={ TrackIndex } />
  </div>
);

export default App;
