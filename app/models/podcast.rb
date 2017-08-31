# == Schema Information
#
# Table name: podcasts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  logo_url   :string           not null
#  feed_url   :string           not null
#  itunes_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Podcast < ApplicationRecord
  validates :title, presence: true
  validates :feed_url, :logo_url, :itunes_id, presence: true, unless: 'admin_id'
  validates :admin_id, presence: true, unless: 'itunes_id'

  has_attached_file :original_logo, presence: true, unless: 'itunes_id'

  validates_attachment_content_type :original_logo,
                                    content_type: /\Aimage\/.*\z/,
                                    unless: 'itunes_id'
  validates_with AttachmentSizeValidator, attributes: :original_logo,
                                          less_than: 3.megabytes,
                                          unless: 'itunes_id'

  has_many :episodes
  belongs_to :admin,
    class_name: :User,
    primary_key: :user_id,
    foreign_key: :admin_id
end
