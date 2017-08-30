export const requestAllEpisodes = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/episodes`,
  });
};

export const addOriginalEpisode = episode => {
  return $.ajax({
    method: 'POST',
    url: '/api/episodes',
    processData: false,
    contentType: false,
    data: episode,
  });
};
