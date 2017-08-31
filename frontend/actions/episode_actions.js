import * as APIUtil from '../util/episode_api_util';
export const RECEIVE_ALL_EPISODES = 'RECEIVE_ALL_EPISODES';
export const RECEIVE_CURRENT_EPISODE = 'RECEIVE_CURRENT_EPISODE';
export const RECEIVE_NEW_EPISODE = 'RECEIVE_NEW_EPISODE';
export const RECEIVE_EDITED_EPISODE = 'RECEIVE_EDITED_EPISODE';
export const RECEIVE_DELETED_EPISODE = 'RECEIVE_DELETED_EPISODE';
export const RECEIVE_SINGLE_EPISODE = 'RECEIVE_SINGLE_EPISODE';
import {receiveErrors} from './error_actions';

export const requestAllEpisodes = () => dispatch => {
  return APIUtil.requestAllEpisodes()
    .then(episodes => {
      dispatch(receiveAllEpisodes(episodes));
    });
};

export const requestSingleEpisode = (id) => dispatch => {
  return APIUtil.requestSingleEpisode(id)
    .then(episode => {
      dispatch(receiveSingleEpisode(episode));
    });
};

export const addOriginalEpisode = episode => dispatch => {
  return APIUtil.addOriginalEpisode(episode)
    .then( returnedEpisode => {
      dispatch(receiveNewEpisode(returnedEpisode));
    });
};
export const editEpisode = (id, episode) => dispatch => {
  return APIUtil.editEpisode(id, episode)
    .then( returnedEpisode => dispatch(receiveEditedEpisode(returnedEpisode)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteEpisode = (episode) => dispatch => {
  return APIUtil.deleteEpisode(episode)
    .then( returnedEpisode => dispatch(receiveDeletedEpisode(returnedEpisode)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveEditedEpisode = (episode) => {
  return {
    type: RECEIVE_NEW_EPISODE,
    episode,
  };
};
export const receiveDeletedEpisode = (episode) => {
  return {
    type: RECEIVE_DELETED_EPISODE,
    episode,
  };
};

export const receiveNewEpisode = (episode) => {
  return {
    type: RECEIVE_NEW_EPISODE,
    episode,
  };
};

export const receiveSingleEpisode = (payload) => {
  return {
    type: RECEIVE_SINGLE_EPISODE,
    payload,
  };
};

export const receiveAllEpisodes = (payload) => {
  return {
    type: RECEIVE_ALL_EPISODES,
    payload,
  };
};

export const receiveCurrentEp = (currentEp) => {
  return {
    type: RECEIVE_CURRENT_EPISODE,
    currentEp,
  };
};
