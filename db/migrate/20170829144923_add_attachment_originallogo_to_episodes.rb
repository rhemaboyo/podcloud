class AddAttachmentOriginallogoToEpisodes < ActiveRecord::Migration
  def self.up
    change_table :episodes do |t|
      t.attachment :original_logo
    end
  end

  def self.down
    remove_attachment :episodes, :original_logo
  end
end
