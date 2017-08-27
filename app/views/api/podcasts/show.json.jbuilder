json.podcast do
  json.partial! 'api/podcasts/podcast', podcast: @podcast
  json.episodes do
    json.array! @episodes, partial: 'api/episodes/episode', as: :episode
  end
end
