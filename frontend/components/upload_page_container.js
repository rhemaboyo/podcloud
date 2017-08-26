import { connect } from 'react-redux';
import UploadPage from './upload_page';
import {logout} from '../actions/session_actions';
import {addPodcast} from '../actions/podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    addPodcast: podcast => dispatch(addPodcast(podcast)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);
