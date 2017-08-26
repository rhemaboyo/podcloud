export const addPodcast = () => {
  $.ajax({
    method: 'POST',
    url: 'api/podcast',
  });
};
