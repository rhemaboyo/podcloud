import React from 'react';
import LandingPageContainer from './landing_page_container';
import TrackIndexContainer from './track_index_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={ LandingPageContainer } />
    <ProtectedRoute path="/stream" component={ TrackIndexContainer } />
  </div>
);

export default App;
