import { connect } from 'react-redux';
import PodcastPage from './podcast_page';
import {requestSinglePodcast} from '../actions/podcast_actions';
import {addOriginalEpisode,
        receiveCurrentEp} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePodcast: itunesId => dispatch(requestSinglePodcast(itunesId)),
    receiveCurrentEp: episode => dispatch(receiveCurrentEp(episode)),
    addOriginalEpisode: episode => dispatch(addOriginalEpisode(episode)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const podcast = state.entities.podcasts[ownProps.match.params.id];
  return {
    podcast,
    episodes: selectEpisodes(state),
    currentEp: state.entities.episodes.currentEp,
    user: state.session.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
