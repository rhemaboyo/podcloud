import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';
import { RECEIVE_ALL_EPISODES,
         RECEIVE_CURRENT_EPISODE } from '../actions/episode_actions';

const _defaultState = {
  currentEp: null,
  ord: [],
};

const EpisodesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_EPISODES:
      return merge({}, action.payload.episodes, {currentEp: null});
    case RECEIVE_CURRENT_EPISODE:
      newState = merge({}, state);
      newState.currentEp = action.currentEp;
      return newState;
    case RECEIVE_SINGLE_PODCAST:
      return merge({}, state, action.payload.episodes);
    default:
      return state;
  }
};

export default EpisodesReducer;
