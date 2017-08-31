import { merge } from 'lodash';
import { RECEIVE_NEW_COMMENT,
         RECEIVE_REMOVED_COMMENT} from '../actions/comment_actions';
import {RECEIVE_SINGLE_EPISODE} from '../actions/episode_actions';

const _defaultState = {
  ord: [],
};

const CommentsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NEW_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment});
      newState.ord.unshift(action.comment.id);
      return newState;
    case RECEIVE_SINGLE_EPISODE:
      return action.payload.comments;
    case RECEIVE_REMOVED_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.id];
      newState.ord = newState.ord
        .filter(id => parseInt(id) !== action.comment.id);
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
