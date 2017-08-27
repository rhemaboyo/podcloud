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
  validates :title, :summary, :pub_date, :podcast_id,
            :audio_url, :duration, :audio_type, presence: true
  belongs_to :podcast
end
