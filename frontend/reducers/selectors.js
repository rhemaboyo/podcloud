export const selectEpisodes = state => {
  return state.entities.episodes.ord.map( id => {
    return state.entities.episodes[id];
  });
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
