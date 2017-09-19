import { connect } from 'react-redux';
import EpisodeIndexItem from './episode_index_item';
import {receiveCurrentEp} from '../actions/episode_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentEp: episode => dispatch(receiveCurrentEp(episode)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentEp: state.entities.episodes.currentEp
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeIndexItem);
