class MakeAudioUrlNull < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:episodes, :audio_url, true)
  end
end
