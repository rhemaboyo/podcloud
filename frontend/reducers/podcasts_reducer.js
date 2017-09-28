import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST,
         RECEIVE_ALL_PODCASTS,} from '../actions/podcast_actions';
import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';

const PodcastsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_PODCAST:
      const podcast = action.payload.podcast;
      return merge({}, state, {[podcast.id]: podcast});
    case RECEIVE_ALL_PODCASTS:
      return action.podcasts;
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default PodcastsReducer;
