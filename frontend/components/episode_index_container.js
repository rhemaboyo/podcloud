import { connect } from 'react-redux';
import EpisodeIndex from './episode_index';
import {receiveCurrentEp, requestAllEpisodes} from '../actions/episode_actions';
import {selectEpisodes} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllEpisodes: () => dispatch(requestAllEpisodes()),
    receiveCurrentEp: episode => dispatch(receiveCurrentEp(episode)),
  };
};

const mapStateToProps = (state) => {
  return {
    episodes: selectEpisodes(state),
    currentEp: state.entities.episodes.currentEp
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeIndex);
