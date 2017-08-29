import React from 'react';
import LandingPageContainer from './landing_page_container';
import EpisodeIndexContainer from './episode_index_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch} from 'react-router-dom';
import UserPageContainer from './user_page_container';
import UploadPageContainer from './upload_page_container';
import PodcastPageContainer from './podcast_page_container';
import ProgressBarContainer from './progress_bar_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={ LandingPageContainer } />
      <ProtectedRoute exact path="/stream" component={ EpisodeIndexContainer } />
      {/*Protect user route for now...should be made public later*/}
      <ProtectedRoute path="/upload" component={UploadPageContainer}/>
      <ProtectedRoute path="/podcasts/:id" component={PodcastPageContainer}/>
      <ProtectedRoute path="/:username" component={UserPageContainer}/>
    </Switch>
    <footer>
      <ProgressBarContainer/>
    </footer>
  </div>
);

export default App;
