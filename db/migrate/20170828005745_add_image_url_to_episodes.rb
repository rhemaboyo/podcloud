class AddImageUrlToEpisodes < ActiveRecord::Migration[5.0]
  def change
    add_column :episodes, :image_url, :string, null: false
  end
end
