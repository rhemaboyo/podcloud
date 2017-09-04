import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../actions/session_actions';
import {removeErrors} from '../actions/error_actions';
import {addOriginalPodcast} from '../actions/podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    removeErrors: () => dispatch(removeErrors()),
    addOriginalPodcast: podcast => dispatch(addOriginalPodcast(podcast)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
