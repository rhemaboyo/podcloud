import { merge } from 'lodash';
import { RECEIVE_PODCAST } from '../actions/podcast_actions';

// const _defaultState = {
//   currentUser: null,
//   errors: [],
// };

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PODCAST:
      return merge({}, state, action.podcast);
    default:
      return state;
  }
};

export default SessionReducer;
