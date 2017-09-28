json.extract! episode, :id, :title, :summary, :pub_date, :podcast_id, :image_url
json.podcast_title episode.podcast.title
if episode.audio_url
  json.audio_url episode.audio_url
else
  json.audio_url episode.original_audio.url
end
