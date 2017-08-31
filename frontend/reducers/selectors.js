export const selectEpisodes = state => {
  return state.entities.episodes.ord.map( id => {
    return state.entities.episodes[id];
  });
};

export const selectAllPodcasts = state => {
  return Object.keys(state.entities.podcasts).map(id => {
    return state.entities.podcasts[id];
  });
};

export const selectAllComments = state => {
  return state.entities.comments.ord.map( id => {
    return state.entities.comments[id];
  });
};

export const selectMostRecentPodcastId = state => {
  const ids = Object.keys(state.entities.podcasts);
  if (ids.length === 0) return null;
  return ids[0];
};

export const getPlaylist = state => {
  const {episodes} = state.entities;
  let [beginning, end] = [[],[]];
  let startSongIndex = null;
  state.entities.episodes.ord.forEach( (id, i) => {
    if (id === episodes.currentEp) startSongIndex = parseInt(id);
    if (startSongIndex) {
      beginning.push({
        name: state.entities.episodes[id].title,
        src: state.entities.episodes[id].audioUrl,
        img: state.entities.episodes[id].imageUrl,
      });
    } else {
      end.push({
        name: state.entities.episodes[id].title,
        src: state.entities.episodes[id].audioUrl,
        img: state.entities.episodes[id].imageUrl,
      });
    }
  });
  return beginning.concat(end);
};
