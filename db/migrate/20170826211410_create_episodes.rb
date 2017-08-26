class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :summary, null: false
      t.datetime :pub_date, null: false
      t.string :audio_url, null: false
      t.integer :duration, null: false

      t.timestamps
    end
  end
end 
