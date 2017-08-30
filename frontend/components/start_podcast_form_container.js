import { connect } from 'react-redux';
import StartPodcastForm from './start_podcast_form';
import {addOriginalPodcast} from '../actions/podcast_actions';
import {removeErrors} from '../actions/podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addOriginalPodcast: podcast => dispatch(addOriginalPodcast(podcast)),
    removeErrors: () => dispatch(removeErrors())
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    mostRecentPodcastId: state.entities.podcasts.ord[0],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPodcastForm);
