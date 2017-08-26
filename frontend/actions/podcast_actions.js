import * as APIUtil from '../util/podcast_api_util';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';

export const addPodcast = podcast => dispatch => {
  return APIUtil.addPodcast(podcast)
    .then(returnedPodcast => dispatch(receivePodcast(returnedPodcast)));
};


export const receivePodcast = (podcast) => {
  return {
    type: RECEIVE_PODCAST,
    podcast
  };
};
