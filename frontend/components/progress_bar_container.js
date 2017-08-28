import { connect } from 'react-redux';
import ProgressBar from './progress_bar';
import {getPlaylist} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    currentEp: state.entities.episodes.currentEp,
    playlist: state.entities.episodes.currentEp ? getPlaylist(state) : [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
