json.set! :pokemon do
  # def extract!(thing_to_build, *args)
  #   thing_to_build.send(args[0])
json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
json.set! :item_ids, @pokemon.item_ids.reverse
end

json.set! :items do
  @pokemon.items.each do |item|
    json.set! item.id, item
  end
end


# t.integer "pokemon_id", null: false
# t.string "name", null: false
# t.integer "price", null: false
# t.integer "happiness", null: false
# t.string "image_url", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["pokemon_id"], name: "index_items_on_pokemon_id"
