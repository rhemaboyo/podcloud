import { RECEIVE_ERRORS } from '../actions/error_actions';

const ErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
