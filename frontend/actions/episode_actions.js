import * as APIUtil from '../util/episode_api_util';
export const RECEIVE_ALL_EPISODES = 'RECEIVE_ALL_EPISODES';
export const RECEIVE_CURRENT_EPISODE = 'RECEIVE_CURRENT_EPISODE';

export const requestAllEpisodes = () => dispatch => {
  return APIUtil.requestAllEpisodes()
    .then(episodes => {
      dispatch(receiveAllEpisodes(episodes));
    });
};


export const receiveAllEpisodes = (payload) => {
  return {
    type: RECEIVE_ALL_EPISODES,
    payload
  };
};

export const receiveCurrentEp = (currentEp) => {
  return {
    type: RECEIVE_CURRENT_EPISODE,
    currentEp,
  };
};
