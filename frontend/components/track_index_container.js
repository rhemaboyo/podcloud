import { connect } from 'react-redux';
import TrackIndex from './track_index';
import {requestAllEpisodes} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllEpisodes: () => dispatch(requestAllEpisodes()),
  };
};

const mapStateToProps = (state) => {
  return {
    episodes: selectEpisodes(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
