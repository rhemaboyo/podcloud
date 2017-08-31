import { connect } from 'react-redux';
import UserPage from './user_page';
import {logout, editUser} from '../actions/session_actions';
import {selectAllPodcasts} from '../reducers/selectors';
import {getAllPodcasts} from '../actions.podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    editUser: (id, data) => dispatch(editUser(id, data)),
    getAllPodcasts: () => dispatch(getAllPodcasts()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    podcasts: selectAllPodcasts(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
