# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150917200227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "trades", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "company_symbol"
    t.integer  "number_of_shares"
    t.decimal  "share_purchase_price"
    t.string   "trade_type"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.decimal  "last_price"
    t.decimal  "dollar_change"
    t.decimal  "change_percent"
    t.decimal  "open_price"
    t.decimal  "high_price"
    t.decimal  "low_price"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.string   "phone"
    t.string   "token"
    t.decimal  "cash"
    t.string   "profile_image"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.decimal  "net_worth"
    t.decimal  "days_gain"
    t.decimal  "portfolio_value"
    t.decimal  "open_net_worth"
  end

end
