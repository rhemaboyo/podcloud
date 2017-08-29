class AddAttachmentAudioToEpisodes < ActiveRecord::Migration
  def self.up
    change_table :episodes do |t|
      t.attachment :original_audio
    end
  end

  def self.down
    remove_attachment :episodes, :original_audio
  end
end
