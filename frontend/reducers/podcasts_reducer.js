import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';


const PodcastsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_PODCAST:
      const podcast = action.payload.podcast;
      return merge({}, state, {[podcast.id]: podcast});
    default:
      return state;
  }
};

export default PodcastsReducer;
