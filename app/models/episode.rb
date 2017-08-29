# == Schema Information
#
# Table name: episodes
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  summary    :text             not null
#  pub_date   :datetime         not null
#  audio_url  :string           not null
#  duration   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Episode < ApplicationRecord
  validates :title, :summary, :pub_date, :podcast_id, :image_url, presence: true
  validates :audio_url, :duration, :audio_type,
            presence: true, unless: 'original_audio'

  has_attached_file :original_audio, presence: true, unless: 'audio_url'
  validates_attachment_content_type :original_audio, content_type: /\Aaudio\/.*\z/,
                                            unless: 'audio_url'
  validates_with AttachmentSizeValidator, attributes: :original_audio,
                                          less_than: 50.megabytes,
                                          unless: 'audio_url'

  belongs_to :podcast
end
