import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';
import { RECEIVE_ALL_EPISODES,
         RECEIVE_CURRENT_EPISODE,
         RECEIVE_NEW_EPISODE,
         RECEIVE_EDITED_EPISODE,
         RECEIVE_DELETED_EPISODE,
         RECEIVE_SINGLE_EPISODE} from '../actions/episode_actions';

const _defaultState = {
  currentEp: null,
  ord: [],
};

const EpisodesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_EPISODES:
      return merge({}, action.payload.episodes, {currentEp: state.currentEp});
    case RECEIVE_CURRENT_EPISODE:
      newState = merge({}, state);
      newState.currentEp = action.currentEp ? action.currentEp.id : null;
      return newState;
    case RECEIVE_EDITED_EPISODE:
      return merge({}, state, {[action.payload.episode.id]: action.payload.episode});
    case RECEIVE_DELETED_EPISODE:
      newState = merge({}, state);
      delete newState[action.episodeId];
      newState.ord = newState.ord
        .filter(id => parseInt(id) !== action.episodeId);
      return newState;
    case RECEIVE_NEW_EPISODE:
      newState = merge({}, state);
      newState.ord.unshift(action.payload.episode.id);
      return merge({}, newState, {[action.payload.episode.id]: action.payload.episode});
    case RECEIVE_SINGLE_PODCAST:
      newState = merge({}, action.payload.episodes, {currentEp: state.currentEp});
      return newState;
    case RECEIVE_SINGLE_EPISODE:
      return {[action.payload.episode.id]: action.payload.episode,
              ord: [action.payload.episode.id],
              currentEp: state.currentEp};
    default:
      return state;
  }
};

export default EpisodesReducer;
