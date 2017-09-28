import * as APIUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_TERMS = 'RECEIVE_SEARCH_TERMS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const getSearchResults = searchTerm => dispatch => {
  return APIUtil.getSearchResults(searchTerm)
  .then(results => dispatch(receiveSearchResults(results)));
};

export const receiveSearchTerms = (terms) => {
  return {
    type: RECEIVE_SEARCH_TERMS,
    terms
  };
};

export const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};
