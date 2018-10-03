# create_table "parties", force: :cascade do |t|
#   t.string "name", null: false
#   t.string "location", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

json.extract! party, :name, :location
