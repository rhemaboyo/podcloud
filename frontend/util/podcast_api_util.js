export const addPodcast = (podcast) => {
  $.ajax({
    method: 'POST',
    url: 'api/podcast',
    data: {
      podcast: {
        title: podcast.collectionName,
        logo_url: podcast.artworkUrl360,
        feed_url: podcast.feedUrl,
        itunes_id: podcast.collectionId,
      }
    }
  });
};
