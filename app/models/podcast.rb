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
  
end
