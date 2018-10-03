json.array! @parties do |party|
    json.partial! 'parties', party: party
end
