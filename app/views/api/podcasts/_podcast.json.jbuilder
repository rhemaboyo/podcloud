json.extract! podcast, :title, :logo_url, :feed_url, :itunes_id
episodes.each do |episode|
  json.extract! episode, :title, :summary, :pub_date, :podcast_id, :audio_url, :duration
end
