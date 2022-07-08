# require 'json'
# pp 'Deleting countries'
# Country.destroy_all
# # pp 'Starting to garden. 👩‍🌾 🌱 🌦'

pp 'Planting user seeds... 🤩'
nat = User.create!(username: 'Natasha', password: 'chordquest8', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1808/jemastock180804186/111964524-woman-faceless-head-vector-illustration-graphic-design-vector-illustration-graphic-design.jpg?ver=6')
mel = User.create!(username: 'Melody', password: 'gr8tfulplanA', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1608/jemastock160807998/61291593-flat-design-faceless-woman-portrait-icon-vector-illustration.jpg?ver=6')
conor = User.create!(username: 'Conor', password: '$990gold', profile_image: 'https://t4.ftcdn.net/jpg/04/43/35/29/360_F_443352922_r45afWp3mxf8437qS52yLEz1Z51a1CFJ.jpg')
kim = User.create!(username: 'Kimi', password: 'red42hot!', profile_image: 'https://us.123rf.com/450wm/jemastock/jemastock1811/jemastock181111745/127555993-young-woman-avatar-vector-illustration-graphic-design-vector-illustration-graphic-design.jpg?ver=6')
darin = User.create!(username: 'Darin', password: 'JellyDonut$$', profile_image: 'https://www.just.edu.jo/Units_and_offices/Offices/IRO/PublishingImages/Pages/contactus/1558784672.jpg')



# # pp 'Planting post seeds... 🤩'
# # Post.create!(user_id: 1, country_id: 6, content: 'Had a great time here!', category: 1, image: 'https://i.natgeofe.com/n/f12e6dc0-3515-45cd-9657-7c0d1a87a512/street-bangkok-thailand.jpg')
# # Post.create!(user_id: 2, country_id: 7, content: 'Had a great time exploring the area, especially since I have never been here!', category: 2, image: 'https://cdn.travelpulse.com/images/b8aaedf4-a957-df11-b491-006073e71405/cf5cc01e-1d87-4148-81fa-ebfa8277626f/630x355.jpg')
# # Post.create!(user_id: 3, country_id: 3, content: 'This was the most beautiful place!', category: 0, image: 'https://www.paladintr.com/wp-content/uploads/2020/08/Lisbon.jpg')
# # Post.create!(user_id: 4, country_id: 2, content: 'Everything was exquisite!', category: 1, image: 'https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg')
# # Post.create!(user_id: 5, country_id: 8, content: 'Had a wonderful time meeting locals and enjoying authentic food', category: 2, image: 'https://www.worldbank.org/content/dam/photos/780x439/2021/apr/Marrakesh-Morocco---Balate-Dorin---SHutterstock.jpg')
# # Post.create!(user_id: 1, country_id: 1, content: 'Definitely recommend this place', category: 1, image: 'https://www.nia.nih.gov/sites/default/files/2022-02/salmonbowl_meta.jpg')
# # Post.create!(user_id: 2, country_id: 4, content: 'Great way to see the sights', category: 2, image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/220302-telluride-ONETIMEUSE-only-mn-1440-ca687a.jpg')


# pp 'Planting post seeds... 🤩'

# # Thailand
# Post.create!(user_id: 2, country_code: 'THA', content: 'I highly recommend the jungle bike tour, which leads travelers through Bangkok's jungle "lung". The ride is beautiful with little surprises dotted along the way, like hungry fish, sweet, traditional homes, adorable little coffee houses, and more. At our several stops, we enjoyed wonderful conversation and such delicious food and drinks with our excellent guide, Kan, and learned so much about Buddhism as it is practiced in daily life in Thailand.', category: 2, image: 'https://www.bordersofadventure.com/wp-content/uploads/2020/04/Biking-in-Bangkok-countryside.jpg', city: 'Bangkok')

# Post.create!(user_id: 5, country_code: 'THA', content: 'We took a chance while at the Asiatique waterfront to see how the food would be on board at Sirimahannop and it was fantastic. A completely well spent evening with excellent service from Janny and delicious green curry with paratha and jasmine rice. Janny was careful enough to recommend dishes that were not spicy for my youngest daughter and got me a sampler as well to check on the spice and flavour levels. These are top notch service levels. The ambience is excellent and the facilities are in top top shape. I would recommend that if you are at the Asiatique waterfront don’t miss this wonderful restaurant with great views, service and ambience.', category: 1, image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/62/f2/22/sirimahannop.jpg', city: 'Bangkok')

# Post.create!(user_id: 8, country_code: 'THA', content: 'My partner and I booked a stay here for 7 nights. We were given a lovely room on the eighth floor. The pool area is on the 10th floor and is beautiful with a great atmosphere of sun loungers, comfy chairs, a bar etc. The food and drinks at the rooftop bar are good and well priced. Also, room service offers the same food and prices which is good. There’s a good gym located on the 9th floor which my partner used daily. Our stay included breakfast which was lovely. It is an American buffet breakfast with loads to offer. The pancake machine was a bonus! This hotel was so nice that we extended our stay for an extra 5 nights. This was due to the fabulous experience we had so far. It’s worth mentioning that all of the hotel staff are polite and helpful. They can’t do enough to help! I would 100% recommend this hotel and stay here again!', category: 0, image: 'https://livingnomads.com/wp-content/uploads/2017/05/29/The-Marina-Phuket-Hotel.jpg', city: 'Phuket')

# Post.create!(user_id: 6, country_code: 'THA', content: 'My partner and I took a walk through the bustling side streets of Patong (approximately 1.5km from Patong Beach, so allow an hours easy walking), to visit Suwan Khiri Wong Temple. The gates were open and there is no entry fee, nor surprisingly were there any donation boxes. We accepted the help of a young boy who seemed to know his way around the entire complex, and were certainly not disappointed by what we saw. Well worth a visit, if only to escape the hustle and bustle of Patong Beach for a couple of hours.', category: 2, image: 'https://previews.123rf.com/images/denyshutter/denyshutter1703/denyshutter170300020/74785704-thai-temple-wat-patong-temple-suwankeereewong-phuket-thailand-.jpg', city: 'Patong')

# Post.create!(user_id: 3, country_code: 'THA', content: 'My husband and I stayed in Na Nirand Romantic Boutique Resort for 3 nights. We stayed in one of the suites that comes with its own semi private pool. The staff is very warm and helpful. They advised us the best street foods and transportation. The included breakfast is one of the highlights. From a noodle and omelette station, to delicious authentic thai fruits and food we left every breakfast full and happy. The cleaning was immaculate. After a long day of sightseeing and shopping the pool was the perfect addition to relax. They have a buy 1 get one free happy hour daily with delicious cocktails, mock tails, and fruit juices. I highly recommend this hotel, would definitely stay again.', category: 0, image: 'https://i0.wp.com/boutiquetravelblog.com/wp-content/uploads/2017/04/P1100749.jpg?fit=900%2C600&ssl=1', city: 'Chiang Mai')

# Post.create!(user_id: 9, country_code: 'THA', content: 'We were thrilled to discover PhraNang Cave Beach with incredible enormous rock formations! PhraNang Beach has become my favorite place in Thailand! The ocean water is very clean and wonderful sandy beaches to stroll. There are numerous islands near the shoreline that make this area even more special. This beach has to be one of the most beautiful places in Thailand. We were simply in awe. We also climbed to the Railay viewpoint and the view was stunning. Not to be missed when in Krabi.', category: 2, image: 'https://a.cdn-hotels.com/gdcs/production82/d183/f8382092-5689-463d-b693-42331d2eaa66.jpg?impolicy=fcrop&w=800&h=533&q=medium', city: 'Krabi')

# Post.create!(user_id: 1, country_code: 'THA', content: 'We stayed here for over 3 months during Covid period, we had a very lovely experience here. The hotel is well designed. We stayed in ocean front room with a lovely private swimming pool. The room is lovely; it’s bright and modern, there’s a café machine and a mini fridge in the room. The room is always clean. They also take care of our laundry every day. It was a pleasure to stay inside the room when we don’t want to go out. We also go to the gym everyday, and you have all you need inside the gym. The beach is clean, we can see staff cleaning the beach quite often. The breakfast is good, we have our favorite dishes: smoothiebool egg Benedict and noodle soup. What we love the most is the staff people here, everyone is so friendly and they always say hello when they see us, especially Jeff and Mook, they are very helpful and kind. The manager Erwin comes also in the morning to say hello and make sure everyone is happy here. We would definitely recommend Sala hotel in Koh Samui. We are going to Sala Chomong actually after stayed in Sala chawing.', category: 0, image: 'https://media.cntraveller.com/photos/611be869ab1fb48d7ae603d1/master/w_1600%2Cc_limit/catch-beach-club-surin-beach-phuket-thailand-conde-nast-traveller-10nov15-pr.jpg', city: 'Chaweng')

# Post.create!(user_id: 5, country_code: 'THA', content: 'The journey restaurant is the perfect place for a relaxed afternoon by the sea. Chilled athmosphere with grest music, good food for a reasonable price and most important the super friendly staff , very motivated and helpful. They made our visits there to the highlight of our whole vacation. Many thanks to the team Khun Kea, Gee, Peter and Gloong. We will return as soon as possible!', category: 1, image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/0a/d0/af/romantic-dinner.jpg', city: 'Chaweng')



# # Morocco
# # Post.create!(user_id: 11, country_code: 'THA', content: 'Le Jardin Secret is a wonderful place for a solo traveler, and I highly recommend visiting if you're on your own. You will have a chance to take your time, explore the palace and gardens, and sit and relax and enjoy for awhile - maybe in a couple different spots you will find. If you are on your own you will want Google Maps on your phone to get you there easily and to get you back out of the Medina. The admission is 80 DH - about $8 and well worth it. There is an on-site cafe, though I didn't use it. The origins of the complex date back to the Saadian Dynasty, more than four hundred years ago. Rebuilt in the mid-Nineteenth century at the behest of an influential Kaid of the Atlas Mountains, Le Jardin Secret has been the home of some of Morocco and Marrakech’s most important political figures. Today it can be appreciated by the public thanks to the recent renovation. Le Jardin Secret is part of the great tradition of stately Arab-Andalusian and Moroccan palaces. As a result visitors can discover its gardens and buildings, which are outstanding examples of Islamic art and architecture.', category: 2, image: 'https://cktravels.com/wp-content/uploads/2020/03/le-jardin-secret-marrakech_12.jpg', city: 'Marrakech')

# # Post.create!(user_id: 12, country_code: 'THA', content: 'We had a very pleasant dinner at Dar Cherifa. Warming reception, beautiful place, excellent food. We decided for the terrace to enjoy our meal and together with the help and kindness of Ahmad we had an amazing time. Ahmad received us quite well, helped us choosing our dishes and we had nice conversations during the dinner. The space is a historical riad in the middle of the souks, very clean and calm. Good to relax and enjoy with friends. Thanks to Ahmad to make our experience the best.', category: 1, image: 'https://marrakech-riads.com/wp-content/uploads/2018/08/cherifa2.jpg', city: 'Marrakech')

# # Post.create!(user_id: 13, country_code: 'THA', content: 'We stayed at Riad Fes Maya Suite & Spa and this place is wonderful! Upon first entering, you will be in awe of the beautiful and historic building; it feels like staying in a palace. Most importantly, however, are the people, and the staff at the Riad are a treat. From the moment we were greeted and met by Hamid at our driver’s car, to the welcome tea and introduction to the Riad from Anna, to our delicious rooftop dinner served by Ayman, to the unforgettable cooking class with Mama Fatima and Naima after an exciting trip to the souk to buy the ingredients with Anna and Hamid, we felt like treasured guests in their home. (If you are interested in a cooking class, this one was fantastic. Cooking with Fatima and Naima then sharing a coffee in the kitchen with the whole staff was an experience my husband and I will never forget.) I can say from years of traveling that you will not regret staying here and feeling like home. (If home was a beautiful Moroccan palace!)', category: 0, image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/95441752.jpg?k=8b2e0c9041b8f76c768ea7030722bf0875f72b6f2845fc15fb2783bdbaee87db&o=&hp=1', city: 'Fes')

# # Post.create!(user_id: 14, country_code: 'THA', content: 'How to begin to describe L'Ardoise Gourmande? Sandrine and Fabrice have created a restaurant which should be praised both for its excellent food and ambience. The ratatouille was delicious and complimented well with the sweetness of the Moroccan wine. Everything was cooked to perfection and melted in my mouth with an explosion of flavour. The chocolate fondant was as good a I've ever tasted. The service was friendly, unobtrusive and informative. If you are in Agadir seek out this gem , you won't be disappointed.', category: 1, image: 'https://www.bestfranceforever.com/wp-content/uploads/2018/01/1170x658_ratatouille.jpg', city: 'Agadir')


# #Greece
# # Post.create!(user_id: 15, country_code: 'GRC', content: 'Three Bells of Fira is a lovely view of the blue-painted church dome and its three iconic bells overlooking the Caldera, the other islands and Oia in the distance. It's about a 10-15 minute walk from the main part of Fira along the coast side. The steps you have to take to go up to it from the coastal path are clearly indicated on signs. There were other people there around 3pm in September, but it wasn't over crowded. There's also a parking lot right above it too with plenty of space to "take the best photo." Just under and on both sides of the church, there are a few restaurants with amazing terraces and views. One of the best spots for photography: caldera, sunset. The light is amazing; I prefer to go offseason in order to avoid a lot of people.', category: 2, image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/three-bells-of-fira-at-sunset-erwin-herzog.jpg', city: 'Fira')

# # Post.create!(user_id: 16, country_code: 'GRC', content: 'Volcano View Hotel: What an amazing place. I could not fault anything. From the care taken to meet our needs including advance requests, to the welcoming teams at breakfast and dinner, it was so lovely. As I had never visited Santorini, I struggled to choose a hotel but really struck lucky. The views are fantastic and the sunset is spectacular. It’s near Fira but far enough to avoid the crowds and the noise. It’s easy to visit Oia and the team at reception are so helpful with organising taxis etc. Our room was perfectly appointed with fridge/mini bar and with a nice place to sit on the terrace. Breakfast was a particular treat with a helpful team, delicious local delicacies freshly baked and lovely fruit. Dinner was fantastic; there is room service and a pool bar menu with a great selection.', category: 0, image: 'https://www.hotelsofgreece.com/cyclades/santorini/volcanoviewvillas/volcano-view-hotel02.jpg', city: 'Fira')

# # Post.create!(user_id: 17, country_code: 'GRC', content: 'All I have to say is, if you miss Matoyianni Street, you have not seen Mykonos. This street is the essence of Mykonos. But that is not all, the whole area is full of such small white narrow streets which is a joy to watch. Stroll around, immerse yourself in the beauty, interact with people and you will see a new side of Greece that is very much different from mega cities of Athens or Thessaloniki.', category: 2, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/12/40/af/matoyianni-street.jpg?w=1200&h=-1&s=1', city: 'Mykonos')

# # Post.create!(user_id: 18, country_code: 'GRC', content: 'The Castle of St. Nicholas may be the best site for viewing sunset in Oia. This should be the end of visitors' route if you were traveling from the side of church. From this castle ruin, you could have panoramic views on this beautiful spot including the the windmill-cafe and the small islands off-shore. Would be crowded with visitors particularly during sunset period. If you wanted to take a rest and enjoy the beautiful environment, there were many cafes around for your choice. Highly recommended.', category: 2, image: 'https://i0.wp.com/kopajos.com/wp-content/uploads/Castello-di-Oia-1.jpg?fit=1920%2C1050&ssl=1', city: 'Oia')


# # lodging: 0,
# # food: 1,
# # experiences: 2

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


# pp 'Done seeding!'