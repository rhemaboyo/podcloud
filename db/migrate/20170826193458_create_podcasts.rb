class CreatePodcasts < ActiveRecord::Migration[5.0]
  def change
    create_table :podcasts do |t|
      t.string "title", null: false
      t.string "logo_url", null: false
      t.string "feed_url", null: false
      t.integer "itunes_id", null: false

      t.timestamps
    end
    add_index :podcasts, :title
    add_index :podcasts, :itunes_id, unique: true
  end
end
