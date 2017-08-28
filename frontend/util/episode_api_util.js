export const requestAllEpisodes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/episodes`,
  });
};
