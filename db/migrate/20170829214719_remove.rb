class Remove < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:podcasts, :logo_url, true)
    change_column_null(:podcasts, :feed_url, true)
    change_column_null(:podcasts, :itunes_id, true)
  end
end
