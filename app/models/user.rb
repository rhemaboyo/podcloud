# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  about_me        :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
# crlll fgripe

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validate :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  def find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && is_password?(password)
    nil
  end

  def self.generate_unique_session_token
    session_token = SecureRandom::urlsafe_base64(16)
    while User.find_by(session_token: session_token)
      session_token = SecureRandom::urlsafe_base64(16)
    end
    session_token
  end

  def reset_session_token!
    self.session_token = User.generate_unique_session_token
    self.save!
    self.session_token
  end
end
