import { merge } from 'lodash';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, state, {[action.user.username]: action.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.username]: action.user});
    default:
      return state;
  }
};

export default SessionReducer;
