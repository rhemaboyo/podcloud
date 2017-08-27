json.podcast do
  json.partial! 'api/podcasts/podcast', podcast: @podcast
  json.episodes @episodes.map(&:id)
end

json.episodes do
  @episodes.each do |episode|
    json.set! episode.id do
      json.partial! 'api/episodes/episode', episode: episode
    end 
  end
end
