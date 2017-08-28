import { connect } from 'react-redux';
import ProgressBar from './track_index';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    currentEp: state.entities.episodes.currentEp,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
