import { combineReducers } from 'redux';

import podcasts from './podcasts_reducer';
import episodes from './episodes_reducer';
// import users from './users_reducer';
// import comments from './comments_reducer';

export default combineReducers({
  podcasts,
  episodes,
  // users,
  // comments,
});
