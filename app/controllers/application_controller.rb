class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:token] = nil
  end

  def login(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def require_logged_in!
    render json: {} unless logged_in?
  end

  def require_logged_out!
    render `api/users/show` if logged_in?
  end

  def get_five_episodes(url)
    response = RestClient.get(url)
    feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
    episodes = feed.entries
    five_most_recent_episodes = []
    episodes.each_with_index do |episode, i|
      ep = Episode.new(
        podcast_id: @podcast.id,
        title: episode.title,
        summary: episode.summary,
        pub_date: episode.published,
        audio_url: episode.enclosure_url,
        duration: episode.itunes_duration,
        audio_type: episode.enclosure_type,
        image_url: @podcast.logo_url
      )
      if ep.save
        five_most_recent_episodes << ep
      else
        errors = ep.errors.full_messages
        errors
      end
      break if i == 7
    end
    five_most_recent_episodes
  end
end
