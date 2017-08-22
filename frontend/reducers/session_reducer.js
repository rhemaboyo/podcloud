import { merge } from 'lodash';
import { RECEIVE_ERRORS,
         RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.user;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
