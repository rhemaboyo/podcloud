import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {login, signup} from '../actions/session_actions';
import {removeErrors} from '../actions/error_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
