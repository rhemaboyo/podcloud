class AddAudioTypeToEpisodes < ActiveRecord::Migration[5.0]
  def change
    add_column :episodes, :audio_type, :string, null: false
  end
end
