import * as APIUtil from '../util/comment_api_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const RECEIVE_REMOVED_COMMENT = 'RECEIVE_REMOVED_COMMENT';

export const addComment = comment => dispatch => {
  return APIUtil.addComment(comment)
    .then( returnedComment => dispatch(receiveNewComment(returnedComment)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const removeComment = id => dispatch => {
  return APIUtil.removeComment(id)
    .then( removedComment => dispatch(receiveRemovedComment(removedComment)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveNewComment = (comment) => {
  return {
    type: RECEIVE_NEW_COMMENT,
    comment,
  };
};

export const receiveRemovedComment = comment => {
  return {
    type: RECEIVE_REMOVED_COMMENT,
    comment,
  };
};
