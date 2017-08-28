import { connect } from 'react-redux';
import ProgressBar from './track_index';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    playing: state.entities.episodes.playing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
