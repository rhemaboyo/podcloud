import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StartPodcastForm from './start_podcast_form';
import {addOriginalPodcast} from '../actions/podcast_actions';
import {removeErrors} from '../actions/podcast_actions';
import {selectMostRecentPodcastId} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    addOriginalPodcast: podcast => dispatch(addOriginalPodcast(podcast)),
    removeErrors: () => dispatch(removeErrors())
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    podcastId: selectMostRecentPodcastId(state),
  };
};

export default
  withRouter(connect(mapStateToProps, mapDispatchToProps)(StartPodcastForm));
