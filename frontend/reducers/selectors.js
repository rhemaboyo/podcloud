export const selectEpisodes = state => {
  return state.entities.episodes.ord.map( id => {
    return state.entities.episodes[id];
  });
};

export const getPlaylist = state => {
  const {episodes} = state.entities;
  let [beginning, end] = [[],[]];
  let startSongIndex = -1;
  state.entities.episodes.ord.forEach( (id, i) => {
    if (id === episodes.currentEp[id]) startSongIndex = i;
    if (i < startSongIndex) {
      end.push({
        name: episodes[id].title,
        src: episodes[id].audioUrl,
        img: episodes[id].imageUrl,
      });
    } else {
      beginning.push({
        name: episodes[id].title,
        src: episodes[id].audioUrl,
        img: episodes[id].imageUrl,
      });
    }
  });
  return beginning.concat(end);
};
