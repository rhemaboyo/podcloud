import { combineReducers } from 'redux';

import podcasts from './podcasts_reducer';
import episodes from './episodes_reducer';
import comments from './comments_reducer';
import users from './users_reducer';

export default combineReducers({
  podcasts,
  episodes,
  comments,
  users,
});
