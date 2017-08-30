if podcast.itunes_id
  json.extract! podcast, :id, :title, :logo_url, :feed_url, :itunes_id
  json.admin_id false
end

if podcast.admin_id
  json.extract! podcast, :id, :title, :admin_id
  json.logo_url podcast.original_logo.url
end
