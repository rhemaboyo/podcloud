export const selectEpisodes = state => {
  if (!state.entities.episodes.ord) return null;
  return state.entities.episodes.ord.map( id => {
    return state.entities.episodes[id];
  });
};
