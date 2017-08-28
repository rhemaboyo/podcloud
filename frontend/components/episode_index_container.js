import { connect } from 'react-redux';
import EpisodeIndex from './episode_index';
import {receiveCurrentEp} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentEp: () => dispatch(receiveCurrentEp()),
  };
};

const mapStateToProps = (state) => {
  return {
    episodes: selectEpisodes(state),
    currentEp: state.entities.episodes.currentEp
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeIndex);
