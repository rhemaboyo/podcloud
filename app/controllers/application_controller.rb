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
    render 'api/session/new' unless logged_in?
  end

  def require_logged_out!
    render `api/users/show` if logged_in?
  end

  def get_five_episodes(url)
    debugger
    response = RestClient.get(url)
    feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
    episodes = feed.entries
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
