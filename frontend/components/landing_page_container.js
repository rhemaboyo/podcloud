import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {login, signup} from '../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.current_user
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
