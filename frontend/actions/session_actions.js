import * as APIUtil from '../util/session_api_util';
import {receiveErrors} from './error_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(returnedUser => dispatch(receiveCurrentUser(returnedUser)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(returnedUser => dispatch(receiveCurrentUser(returnedUser)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const editUser = (id, data) => dispatch => {
  return APIUtil.editUser(id, data)
    .then(returnedUser => dispatch(receiveCurrentUser(returnedUser)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
