json.extract! episode, :id, :title, :summary, :pub_date, :podcast_id, :image_url
if episode.duration
  json.audio_url episode.audio_url
else
  json.audio_url episode.original_audio.url
end
