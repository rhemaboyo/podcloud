class AddAdminIdToPodcasts < ActiveRecord::Migration[5.0]
  def change
    add_column :podcasts, :admin_id, :integer
  end
end
