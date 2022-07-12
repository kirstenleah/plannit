# require 'json'
# pp 'Deleting countries'
# Country.destroy_all
# # pp 'Starting to garden. 👩‍🌾 🌱 🌦'

pp 'Planting user seeds... 🤩'
# nat = User.create!(username: 'Natasha', password: 'chordquest8', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1808/jemastock180804186/111964524-woman-faceless-head-vector-illustration-graphic-design-vector-illustration-graphic-design.jpg?ver=6')
# mel = User.create!(username: 'Melody', password: 'gr8tfulplanA', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1608/jemastock160807998/61291593-flat-design-faceless-woman-portrait-icon-vector-illustration.jpg?ver=6')
# conor = User.create!(username: 'Conor', password: '$990gold', profile_image: 'https://t4.ftcdn.net/jpg/04/43/35/29/360_F_443352922_r45afWp3mxf8437qS52yLEz1Z51a1CFJ.jpg')
# kim = User.create!(username: 'Kimi', password: 'red42hot!', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1811/jemastock181111745/127555993-young-woman-avatar-vector-illustration-graphic-design-vector-illustration-graphic-design.jpg?ver=6')
# darin = User.create!(username: 'Darin', password: 'JellyDonut$$', profile_image: 'https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/contactus/1558784672.jpg')

# User.create!(username: 'Jose', password: '12345', profile_image: 'https://t4.ftcdn.net/jpg/04/43/35/29/360_F_443352922_r45afWp3mxf8437qS52yLEz1Z51a1CFJ.jpg')
# User.create!(username: 'Jen', password: 'theplaza', profile_image: 'https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/contactus/1558784672.jpg')
# User.create!(username: 'Barry', password: 'improvhitman', profile_image: 'https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/contactus/1558784672.jpg')
# User.create!(username: 'Jake', password: 'jakejake', profile_image: 'https://t4.ftcdn.net/jpg/04/43/35/29/360_F_443352922_r45afWp3mxf8437qS52yLEz1Z51a1CFJ.jpg')
# User.create!(username: 'Steph', password: 'chasinwaterfalls', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1811/jemastock181111745/127555993-young-woman-avatar-vector-illustration-graphic-design-vector-illustration-graphic-design.jpg?ver=6')
# User.create!(username: 'Tashi', password: 'tashidelek', profile_image: 'https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/contactus/1558784672.jpg')



# # pp 'Planting post seeds... 🤩'


# Ingest all country data
# all_country_data = JSON.parse(File.read('dataset/ne_110m_admin_0_countries.geojson'))
# country_seed_data = []

# # need this loop because the json structure doesn't allow for a string key
# # loop against an incrementing counter to get to each country
# c = 0
# while (c < all_country_data['features'].size)
#     data = {:name => all_country_data['features'][c]['properties']['ADMIN'], :code => all_country_data['features'][c]['properties']['ADM0_A3']}
#     country_seed_data.push(data)
#     c += 1
# end

# # Create seed data for country information in db
# pp 'Planting country seeds... 🤩'
# country_seed_data.each do |data|
#     Country.create!(name: "#{data[:name]}", country_code: "#{data[:code]}")
# end


pp 'Done seeding!'