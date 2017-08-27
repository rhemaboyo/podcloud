json.podcast do
  json.partial! 'api/podcasts/podcast', podcast: @podcast
  json.episode do
    json.array! @episodes, partial: 'api/epidsodes/episode', as: :episode
  end
end
