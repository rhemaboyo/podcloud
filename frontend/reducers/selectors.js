export const selectEpisodes = state => {
  return state.entities.episodes.ord.map( id => {
    return state.entities.episodes[id];
  });
};
