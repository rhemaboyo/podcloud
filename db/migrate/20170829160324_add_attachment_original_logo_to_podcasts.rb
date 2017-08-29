class AddAttachmentOriginalLogoToPodcasts < ActiveRecord::Migration
  def self.up
    change_table :podcasts do |t|
      t.attachment :original_logo
    end
  end

  def self.down
    remove_attachment :podcasts, :original_logo
  end
end
