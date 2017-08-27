json.podcast do
  json.partial! 'api/podcasts/podcast', podcast: @podcast
  json.episodes do
    json.array! @episodes, partial: 'api/episodes/episode', as: :episode
  end
end

json.episodes do
  @episodes.each do |episode|
    json.set! episode.id do
      json.partial! 'api/episodes/episode', episode: episode
    end
  end
end
