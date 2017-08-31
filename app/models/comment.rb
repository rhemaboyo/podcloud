class Comment < ApplicationRecord
  validates :body, :user_id, :episode_id, :image_url, presence: :true

  belongs_to :user
  belongs_to :episode
end
