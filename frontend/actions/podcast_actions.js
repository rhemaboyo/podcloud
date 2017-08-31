import * as APIUtil from '../util/podcast_api_util';
export const RECEIVE_SINGLE_PODCAST = 'RECEIVE_SINGLE_PODCAST';
export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';

export const addPodcast = podcast => dispatch => {
  return APIUtil.addPodcast(podcast)
    .then(returnedPodcast => dispatch(receiveSinglePodcast(returnedPodcast)));
};

export const getAllPodcasts = () => dispatch => {
  return APIUtil.getAllPodcasts()
    .then(podcasts => dispatch(receiveAllPodcasts(podcasts)));
};

export const requestSinglePodcast = itunesId => dispatch => {
  return APIUtil.requestSinglePodcast(itunesId)
    .then(returnedPodcast => dispatch(receiveSinglePodcast(returnedPodcast)));
};

export const addOriginalPodcast = podcast => dispatch => {
  return APIUtil.addOriginalPodcast(podcast)
    .then(returnedPodcast => dispatch(receiveSinglePodcast(returnedPodcast)));
};

export const receiveSinglePodcast = (payload) => {
  return {
    type: RECEIVE_SINGLE_PODCAST,
    payload
  };
};

export const receiveAllPodcasts = (podcasts) => {
  return {
    type: RECEIVE_ALL_PODCASTS,
    podcasts
  };
};
