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

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
