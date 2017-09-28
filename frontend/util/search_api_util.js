export const getSearchResults = (term) => {
  return $.ajax({
    method: 'GET',
    url: `api/search/${term}`,
  });
};
