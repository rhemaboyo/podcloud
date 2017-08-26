class AddIndexToEpisodes < ActiveRecord::Migration[5.0]
  def change
    add_index :episodes, :title
  end
end
