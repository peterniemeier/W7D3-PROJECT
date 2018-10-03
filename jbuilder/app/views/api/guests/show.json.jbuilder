json.partial! 'guest', guest: @guest
# json.gifts @guest.gifts do |gift|
#   json.extract! gift, :title, :description
# end

json.gifts do
  json.array! @guest.gifts, :title, :description
end
