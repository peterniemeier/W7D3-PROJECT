json.array! @gifts.each  do |g|
  json.partial! 'gift', gift: g
end
