export const selectEpisodes = state => {
  return Object.keys(state.entities.episodes).map( id => {
    return state.entities.episodes.id;
  });
};
