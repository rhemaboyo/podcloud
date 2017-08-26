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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
