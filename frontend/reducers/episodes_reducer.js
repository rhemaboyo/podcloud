import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';
import { RECEIVE_ALL_EPISODES } from '../actions/episode_actions';


const EpisodesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_EPISODES:
      return action.payload.episodes;
    case RECEIVE_SINGLE_PODCAST:
      return merge({}, state, action.payload.episodes);
    default:
      return state;
  }
};

export default EpisodesReducer;
