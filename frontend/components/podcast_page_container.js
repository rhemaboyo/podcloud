import { connect } from 'react-redux';
import PodcastPage from './podcast_page';
import {requestSinglePodcast} from '../actions/podcast_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePodcast: itunesId => dispatch(requestSinglePodcast(itunesId))
  };
};

const mapStateToProps = (state, ownProps) => {
  const podcast = state.entities.podcasts[ownProps.match.params.itunesId];
  return {
    podcast,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
