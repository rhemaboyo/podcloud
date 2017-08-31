import { connect } from 'react-redux';
import EpisodePage from './episode_page';
import {requestSingleEpisode} from '../actions/episode_actions';
import {addComment} from '../actions/comment_actions';
import {selectAllComments} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleEpisode: id => dispatch(requestSingleEpisode(id)),
    addComment: comment => dispatch(addComment(comment)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const episode = state.entities.episodes[ownProps.match.params.id];
  return {
    episode: episode,
    user: state.session.currentUser,
    comments: selectAllComments(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);
