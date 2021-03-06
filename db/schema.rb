# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170831114314) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "episode_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
    t.index ["episode_id"], name: "index_comments_on_episode_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "episodes", force: :cascade do |t|
    t.string   "title",                       null: false
    t.text     "summary",                     null: false
    t.datetime "pub_date",                    null: false
    t.string   "audio_url"
    t.integer  "duration"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "podcast_id",                  null: false
    t.string   "audio_type"
    t.string   "image_url",                   null: false
    t.string   "original_audio_file_name"
    t.string   "original_audio_content_type"
    t.integer  "original_audio_file_size"
    t.datetime "original_audio_updated_at"
    t.string   "original_logo_file_name"
    t.string   "original_logo_content_type"
    t.integer  "original_logo_file_size"
    t.datetime "original_logo_updated_at"
    t.index ["title"], name: "index_episodes_on_title", using: :btree
  end

  create_table "podcasts", force: :cascade do |t|
    t.string   "title",                      null: false
    t.string   "logo_url"
    t.string   "feed_url"
    t.integer  "itunes_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "original_logo_file_name"
    t.string   "original_logo_content_type"
    t.integer  "original_logo_file_size"
    t.datetime "original_logo_updated_at"
    t.integer  "admin_id"
    t.index ["itunes_id"], name: "index_podcasts_on_itunes_id", unique: true, using: :btree
    t.index ["title"], name: "index_podcasts_on_title", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                  null: false
    t.string   "email",                     null: false
    t.string   "password_digest",           null: false
    t.string   "session_token",             null: false
    t.text     "about_me"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "banner_image_file_name"
    t.string   "banner_image_content_type"
    t.integer  "banner_image_file_size"
    t.datetime "banner_image_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
