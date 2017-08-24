import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {login, signup, removeErrors} from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
