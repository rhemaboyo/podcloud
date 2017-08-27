import { connect } from 'react-redux';
import PodcastPage from './podcast_page';
import {logout} from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state, ownProps) => {
  debugger;
  const podcast = state.entities.podcasts[ownProps.match.params.title];
  return {
    podcast,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
