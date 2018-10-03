json.array! @guests.each  do |g|
  if g.age > 39 && g.age < 51
    json.partial! 'guest', guest: g
  end
end
