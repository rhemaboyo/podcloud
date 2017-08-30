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

export const editEpisode = (id, episode) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/episodes/${id}`,
    processData: false,
    contentType: false,
    data: episode,
  });
};

export const deleteEpisode = (episode) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/episodes/${episode.id}`,
  });
};
