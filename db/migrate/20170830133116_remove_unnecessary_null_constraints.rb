class RemoveUnnecessaryNullConstraints < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:episodes, :duration, true)
    change_column_null(:episodes, :audio_type, true)
  end
end
