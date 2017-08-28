json.key_format! camelize: :lower
json.episodes do
  @episodes.each do |episode|
    json.set! episode.id do
      json.partial! 'api/episodes/episode', episode: episode
    end
  end
  json.ord @episodes.map(&:id)
end
