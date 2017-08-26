module Api::PodcastsHelper
  def get_five_episodes(url)
    response = RestClient.get(url)
    episodes = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response).entries
    five_most_recent_episodes = []
    episodes.each_with_index do |episode, i|
      five_most_recent_episodes << Episode.new(
        podcast_id: @podcast.id,
        title: episode.title,
        summary: episode.summary,
        pub_date: episode.published,
        audio_url: episode.enclosure_url,
        duration: episode.itunes_duration
      )
      break if i == 5
    end
    five_most_recent_episodes
  end
end
