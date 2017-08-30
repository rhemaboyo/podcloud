import { connect } from 'react-redux';
import PodcastPage from './podcast_page';
import {requestSinglePodcast} from '../actions/podcast_actions';
import {addOriginalEpisode} from '../actions/episode_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePodcast: itunesId => dispatch(requestSinglePodcast(itunesId)),
    addOriginalEpisode: episode => dispatch(addOriginalEpisode(episode)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const podcast = state.entities.podcasts[ownProps.match.params.id];
  return {
    podcast,
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
