@podcasts.each do |podcast|
  json.set! podcast.id do
    json.partial! 'api/podcasts/podcast', podcast: podcast
  end
end
