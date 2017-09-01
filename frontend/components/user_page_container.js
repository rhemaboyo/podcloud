import { connect } from 'react-redux';
import UserPage from './user_page';
import {logout, editUser} from '../actions/session_actions';
import {selectAllPodcasts} from '../reducers/selectors';
import {getAllPodcasts} from '../actions/podcast_actions';
import {getUser} from '../actions/user_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    editUser: (id, data) => dispatch(editUser(id, data)),
    getAllPodcasts: () => dispatch(getAllPodcasts()),
    getUser: username => dispatch(getUser(username))
  };
};

const mapStateToProps = (state, ownProps) => {
  const pageUser = state.entities.users[ownProps.match.params.username];
  return {
    user: state.session.currentUser,
    podcasts: selectAllPodcasts(state),
    pageUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
