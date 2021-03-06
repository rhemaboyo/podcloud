export const addPodcast = (podcast) => {
  return $.ajax({
    method: 'POST',
    url: 'api/podcasts',
    data: {
      podcast: {
        title: podcast.collectionName,
        logo_url: podcast.artworkUrl600,
        feed_url: podcast.feedUrl,
        itunes_id: podcast.collectionId,
      }
    }
  });
};

export const requestSinglePodcast = (itunesId) => {
  return $.ajax({
    method: 'GET',
    url: `api/podcasts/${itunesId}`,
  });
};

export const getAllPodcasts = () => {
  return $.ajax({
    method: 'GET',
    url: `api/podcasts/`,
  });
};

export const addOriginalPodcast = (podcast) => {
  return $.ajax({
    method: 'POST',
    url: '/api/podcasts/original',
    processData: false,
    contentType: false,
    data: podcast,
  });
};
