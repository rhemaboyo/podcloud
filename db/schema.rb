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

ActiveRecord::Schema.define(version: 20170826222211) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "summary",    null: false
    t.datetime "pub_date",   null: false
    t.string   "audio_url",  null: false
    t.integer  "duration",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "podcast_id", null: false
    t.index ["title"], name: "index_episodes_on_title", using: :btree
  end

  create_table "podcasts", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "logo_url",   null: false
    t.string   "feed_url",   null: false
    t.integer  "itunes_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
