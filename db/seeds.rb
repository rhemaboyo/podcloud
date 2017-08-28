# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Episode.delete_all

def get_five_episodes(podcast)
  response = RestClient.get(podcast.feed_url)
  feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
  episodes = feed.entries
  five_most_recent_episodes = []
  episodes.each_with_index do |episode, i|
    ep = Episode.new(
    podcast_id: podcast.id,
    title: episode.title,
    summary: episode.summary,
    pub_date: episode.published,
    audio_url: episode.enclosure_url,
    duration: episode.itunes_duration,
    audio_type: episode.enclosure_type,
    image_url: podcast.logo_url
    )
    if ep.save
      five_most_recent_episodes << ep
    else
      errors = ep.errors.full_messages
      errors
    end
    break if i == 5
  end
  five_most_recent_episodes
end

Podcast.all.each do |podcast|
  get_five_episodes(podcast)
end
