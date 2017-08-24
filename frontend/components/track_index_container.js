import { connect } from 'react-redux';
import TrackIndex from './track_index';
import {logout} from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
