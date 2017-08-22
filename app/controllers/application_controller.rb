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
    current_user.try(reset_session_token!)
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
    render `api/users/#{current_user.id}` if logged_in?
  end
end
