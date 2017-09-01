import * as APIUtil from '../util/user_api_util';
import {receiveErrors} from './error_actions';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const getUser = username => dispatch => {
  return APIUtil.getUser(username)
    .then(user => dispatch(receiveSingleUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};
