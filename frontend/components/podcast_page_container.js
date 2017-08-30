import { connect } from 'react-redux';
import PodcastPage from './podcast_page';
import {requestSinglePodcast} from '../actions/podcast_actions';
import {addOriginalEpisode,
        receiveCurrentEp,
        editEpisode,
        deleteEpisode,} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';
import {removeErrors} from '../actions/error_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePodcast: itunesId => dispatch(requestSinglePodcast(itunesId)),
    receiveCurrentEp: episode => dispatch(receiveCurrentEp(episode)),
    addOriginalEpisode: episode => dispatch(addOriginalEpisode(episode)),
    editEpisode: (id, episode) => dispatch(editEpisode(id, episode)),
    removeErrors: () => dispatch(removeErrors()),
    deleteEpisode: episode => dispatch(deleteEpisode(episode))
  };
};

const mapStateToProps = (state, ownProps) => {
  const podcast = state.entities.podcasts[ownProps.match.params.id];
  return {
    podcast,
    episodes: selectEpisodes(state),
    currentEp: state.entities.episodes.currentEp,
    user: state.session.currentUser,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
