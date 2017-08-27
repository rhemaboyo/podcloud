import { merge } from 'lodash';
import { RECEIVE_SINGLE_PODCAST } from '../actions/podcast_actions';


const EpisodesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_PODCAST:
      return merge({}, state, action.payload.episodes);
    default:
      return state;
  }
};

export default EpisodesReducer;
