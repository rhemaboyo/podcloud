import { connect } from 'react-redux';
import EpisodePage from './episode_page';
import {requestSingleEpisode} from '../actions/episode_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleEpisode: id => dispatch(requestSingleEpisode(id))
  };
};

const mapStateToProps = (state, ownProps) => {
  const episode = state.entities.episodes[ownProps.match.params.id];
  return {
    episode: episode,
    user: state.session.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);
