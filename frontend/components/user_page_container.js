import { connect } from 'react-redux';
import UserPage from './user_page';
import {logout, editUser} from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    editUser: (id, data) => dispatch(editUser(id, data)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
