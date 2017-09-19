import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {login, signup} from '../actions/session_actions';
import {removeErrors} from '../actions/error_actions';
import {getSampleEpisodes} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    getSampleEpisodes: () => dispatch(getSampleEpisodes()),
  };
};

const mapStateToProps = (state) => {
  return {
    episodes: selectEpisodes(state),
    errors: state.errors,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
