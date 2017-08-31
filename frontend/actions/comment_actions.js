import * as APIUtil from '../util/episode_api_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';

export const addComment = comment => dispatch => {
  return APIUtil.addComment(comment)
    .then( returnedComment => dispatch(receiveNewComment(returnedComment)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveNewComment = (episode) => {
  return {
    type: RECEIVE_NEW_COMMENT,
    episode,
  };
};
