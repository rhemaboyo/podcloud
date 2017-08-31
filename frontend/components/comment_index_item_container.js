import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
import {removeComment} from '../actions/comment_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    removeComment: id => dispatch(removeComment(id)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem));
