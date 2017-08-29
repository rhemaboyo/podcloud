if podcast.itunes_id
  json.extract! podcast, :id, :title, :logo_url, :feed_url, :itunes_id
end

if podcast.admin_id
  json.extract! podcast, :id, :title, :original_logo
end
