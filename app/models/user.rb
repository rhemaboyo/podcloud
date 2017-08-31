# == Schema Information
#
# Table name: users
#
#  id                        :integer          not null, primary key
#  username                  :string           not null
#  email                     :string           not null
#  password_digest           :string           not null
#  session_token             :string           not null
#  about_me                  :text
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  avatar_file_name          :string
#  avatar_content_type       :string
#  avatar_file_size          :integer
#  avatar_updated_at         :datetime
#  banner_image_file_name    :string
#  banner_image_content_type :string
#  banner_image_file_size    :integer
#  banner_image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "daftpunk.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_attached_file :banner_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "sun_earth_moon.jpg"
  validates_attachment_content_type :banner_image, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  has_many :comments

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
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

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_unique_session_token
  end

end
