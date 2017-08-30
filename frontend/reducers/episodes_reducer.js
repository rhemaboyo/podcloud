import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';
import { RECEIVE_ALL_EPISODES,
         RECEIVE_CURRENT_EPISODE,
         RECEIVE_SINGLE_EPISODE,
         RECEIVE_EDITED_EPISODE,
         RECEIVE_DELETED_EPISODE} from '../actions/episode_actions';

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
      newState.currentEp = action.currentEp ? action.currentEp.id : null;
      return newState;
    case RECEIVE_EDITED_EPISODE:
      return merge({}, state, {[action.episode.id]: action.episode});
    case RECEIVE_DELETED_EPISODE:
      newState = merge({}, state);
      delete newState[action.episode.id];
      newState.ord = newState.ord.filter(id => parseInt(id) !== action.episode.id);
      return newState;
    case RECEIVE_SINGLE_EPISODE:
      newState = merge({}, state);
      newState.ord.unshift(action.episode.id);
      return merge({}, newState, {[action.episode.id]: action.episode});
    case RECEIVE_SINGLE_PODCAST:
      return action.payload.episodes;
    default:
      return state;
  }
};

export default EpisodesReducer;
