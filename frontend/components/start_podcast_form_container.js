import { connect } from 'react-redux';
import StartPodcastForm from './start_podcast_form';
import {addPodcast} from '../actions/podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addPodcast: podcast => dispatch(addPodcast(podcast)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPodcastForm);
