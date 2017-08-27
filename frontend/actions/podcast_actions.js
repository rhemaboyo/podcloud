import * as APIUtil from '../util/podcast_api_util';
export const RECEIVE_SINGLE_PODCAST = 'RECEIVE_SINGLE_PODCAST';

export const addPodcast = podcast => dispatch => {
  return APIUtil.addPodcast(podcast)
    .then(returnedPodcast => dispatch(receiveSinglePodcast(returnedPodcast)));
};

export const requestSinglePodcast = itunesId => dispatch => {
  return APIUtil.requestSinglePodcast(itunesId)
    .then(returnedPodcast => dispatch(receiveSinglePodcast(returnedPodcast)));
};


export const receiveSinglePodcast = (payload) => {
  return {
    type: RECEIVE_SINGLE_PODCAST,
    payload
  };
};

// export const receivePodcastErrors = (errors) => {
//   return {
//     type: RECEIVE_ERRORS,
//     errors
//   };
// };
