const dateIdeas = [
    { idea: 'Prepare a five-course dinner together and enjoy it by candlelight.', type: 'stay' },
    { idea: 'Have a themed movie night with snacks that match the theme.', type: 'stay' },
    { idea: 'Set up a DIY spa day with homemade facials and massages.', type: 'stay' },
    { idea: 'Host a game night with board games and homemade cocktails.', type: 'stay' },
    { idea: 'Cook a new recipe from a different cuisine and enjoy it together.', type: 'stay' },
    { idea: 'Build a blanket fort in the living room and watch nostalgic movies.', type: 'stay' },
    { idea: 'Create a vision board together with goals for the future.', type: 'stay' },
    { idea: 'Host a wine and cheese tasting with a selection of your favorites.', type: 'stay' },
    { idea: 'Have a karaoke night at home with your favorite songs.', type: 'stay' },
    { idea: 'Start a puzzle or a craft project you can work on together.', type: 'stay' },
    { idea: 'Write love letters to each other and read them out loud.', type: 'stay' },
    { idea: 'Have a picnic in the backyard or living room with a homemade meal.', type: 'stay' },
    { idea: 'Create a mini home theater with a projector and popcorn.', type: 'stay' },
    { idea: 'Play video games together and make it a fun competition.', type: 'stay' },
    { idea: 'Plan a DIY painting session and create art for your home.', type: 'stay' },
    { idea: 'Take an online dance class and learn a new style together.', type: 'stay' },
    { idea: 'Bake and decorate a cake together, then enjoy it with tea or coffee.', type: 'stay' },
    { idea: 'Have a book night where you both read and discuss your favorite parts.', type: 'stay' },
    { idea: 'Plan a home workout session and motivate each other.', type: 'stay' },
    { idea: 'Set up a candlelit bath with relaxing music and essential oils.', type: 'stay' },
    { idea: 'Create a time capsule together and plan when to open it.', type: 'stay' },
    { idea: 'Have a tasting night with homemade or store-bought treats like chocolates or pastries.', type: 'stay' },
    { idea: 'Make homemade ice cream with unique flavors you both enjoy.', type: 'stay' },
    { idea: 'Plan a day of no technology and spend quality time together.', type: 'stay' },
    { idea: 'Host a trivia night with questions about each other or favorite topics.', type: 'stay' },
    { idea: 'Learn a new skill together from online tutorials, like knitting or origami.', type: 'stay' },
    { idea: 'Decorate a room together with new ideas and rearrange the furniture.', type: 'stay' },
    { idea: 'Create your own coffee bar at home and try different brewing methods.', type: 'stay' },
    { idea: 'Have a photography session and take fun, creative pictures.', type: 'stay' },
    { idea: 'Write and perform a short play or skit together.', type: 'stay' },
    { idea: 'Have a day of pampering with manicures, pedicures, and face masks.', type: 'stay' },
    { idea: 'Plan a themed dinner night with costumes and decor.', type: 'stay' },
    { idea: 'Recreate your first date at home with similar food, music, and conversation.', type: 'stay' },
    { idea: 'Have a treasure hunt at home with clues and small surprises.', type: 'stay' },
    { idea: 'Listen to a podcast or audiobook together and discuss it afterward.', type: 'stay' },
    { idea: 'Set up a cozy reading nook and spend time reading your favorite books.', type: 'stay' },
    { idea: 'Create a scrapbook of your favorite memories together.', type: 'stay' },
    { idea: 'Have a cooking competition with a mystery basket of ingredients.', type: 'stay' },
    { idea: 'Plan a meditation and mindfulness session to relax and reconnect.', type: 'stay' },
    { idea: 'Make your own pizza night, from dough to toppings, and enjoy it fresh from the oven.', type: 'stay' },
    { idea: 'Create a music playlist together and have a dance party in your living room.', type: 'stay' },
    { idea: 'Plan a day of indulgence with your favorite comfort foods and movies.', type: 'stay' },
    { idea: 'Have a poetry night where you write and share poems with each other.', type: 'stay' },
    { idea: 'Play charades or Pictionary and keep score for fun.', type: 'stay' },
    { idea: 'Set up an indoor camping experience with sleeping bags and a makeshift tent.', type: 'stay' },
    { idea: 'Create a DIY photo booth with props and take silly pictures.', type: 'stay' },
    { idea: 'Plan a themed cocktail night and mix up drinks that match your theme.', type: 'stay' },
    { idea: 'Have a day of pampering with massages, skincare, and relaxation.', type: 'stay' },
    { idea: 'Plan and plant a small herb garden together for your kitchen.', type: 'stay' },
    { idea: 'Go to a local art gallery or museum and explore the exhibits.', type: 'out' },
    { idea: 'Attend a live music event or concert at a nearby venue.', type: 'out' },
    { idea: 'Go for a scenic hike in a nearby nature reserve or park.', type: 'out' },
    { idea: 'Visit a farmers market and pick out fresh ingredients for a meal.', type: 'out' },
    { idea: 'Have a picnic at a local park with homemade sandwiches and drinks.', type: 'out' },
    { idea: 'Go to an escape room and work together to solve the puzzles.', type: 'out' },
    { idea: 'Take a pottery or painting class at a local studio.', type: 'out' },
    { idea: 'Explore a nearby town you’ve never visited before.', type: 'out' },
    { idea: 'Visit a zoo or aquarium and learn about the animals.', type: 'out' },
    { idea: 'Go bowling and make it a fun competition.', type: 'out' },
    { idea: 'Attend a local theater production or play.', type: 'out' },
    { idea: 'Take a scenic bike ride on a trail or through the city.', type: 'out' },
    { idea: 'Go to a rooftop bar and enjoy drinks with a view.', type: 'out' },
    { idea: 'Try out a new restaurant that serves a cuisine you’ve never had.', type: 'out' },
    { idea: 'Visit a botanical garden and admire the beautiful plants and flowers.', type: 'out' },
    { idea: 'Go to a drive-in movie theater and watch a classic film.', type: 'out' },
    { idea: 'Take a cooking class and learn to make a new dish together.', type: 'out' },
    { idea: 'Visit a local historical site or monument and learn its history.', type: 'out' },
    { idea: 'Go to a sports game and cheer for your favorite team.', type: 'out' },
    { idea: 'Have a fun day at an amusement park or carnival.', type: 'out' },
    { idea: 'Visit a winery or brewery and take a tasting tour.', type: 'out' },
    { idea: 'Go for a walk on the beach or along a scenic waterfront.', type: 'out' },
    { idea: 'Explore a flea market or antique shop for unique finds.', type: 'out' },
    { idea: 'Go to a comedy show and enjoy a night of laughs.', type: 'out' },
    { idea: 'Take a boat ride or rent a kayak for a day on the water.', type: 'out' },
    { idea: 'Attend a food festival and try out different dishes.', type: 'out' },
    { idea: 'Go horseback riding at a nearby ranch or stable.', type: 'out' },
    { idea: 'Attend a cooking demonstration at a local culinary school.', type: 'out' },
    { idea: 'Take a photography walk and capture the beauty of your city.', type: 'out' },
    { idea: 'Visit a science museum and engage with interactive exhibits.', type: 'out' },
    { idea: 'Go to a local arcade and have a fun, nostalgic night of gaming.', type: 'out' },
    { idea: 'Explore a nearby botanical garden or arboretum.', type: 'out' },
    { idea: 'Attend a poetry reading or open mic night at a local café.', type: 'out' },
    { idea: 'Go to a local bakery and sample different pastries.', type: 'out' },
    { idea: 'Take a scenic drive through the countryside.', type: 'out' },
    { idea: 'Visit a local brewery and try a beer flight.', type: 'out' },
    { idea: 'Book a weekend getaway to a cozy cabin in the mountains.', type: 'travel' },
    { idea: 'Take a road trip along a scenic route with planned stops for sightseeing.', type: 'travel' },
    { idea: 'Explore a historic city with guided tours and local attractions.', type: 'travel' },
    { idea: 'Plan a beach vacation with activities like surfing, snorkeling, or sunbathing.', type: 'travel' },
    { idea: 'Visit a famous national park and enjoy hiking, wildlife viewing, and campfires.', type: 'travel' },
    { idea: 'Travel to a foreign country and immerse yourself in a new culture with local food and experiences.', type: 'travel' },
    { idea: 'Go on a river cruise and explore different towns and cities along the way.', type: 'travel' },
    { idea: 'Stay in a charming bed and breakfast and explore the surrounding countryside.', type: 'travel' },
    { idea: 'Take a hot air balloon ride over a picturesque landscape.', type: 'travel' },
    { idea: 'Visit a famous vineyard and enjoy wine tasting and a tour of the vineyards.', type: 'travel' },
    { idea: 'Book a stay at a luxury resort with spa treatments and fine dining.', type: 'travel' },
    { idea: 'Explore a tropical island with activities like kayaking, paddleboarding, and exploring hidden coves.', type: 'travel' },
    { idea: 'Take a guided tour of a famous city with stops at iconic landmarks and historical sites.', type: 'travel' },
    { idea: 'Visit a unique destination like a desert oasis or a remote mountain village.', type: 'travel' },
    { idea: 'Travel to a famous festival or event, such as a music festival, food festival, or cultural celebration.', type: 'travel' },
    { idea: 'Plan a camping trip in a national park with hiking, stargazing, and campfire cooking.', type: 'travel' },
    { idea: 'Go on a wildlife safari and experience the thrill of seeing animals in their natural habitat.', type: 'travel' },
    { idea: 'Explore a city known for its art and architecture, visiting museums and iconic buildings.', type: 'travel' },
    { idea: 'Take a train journey through scenic landscapes with stops in charming towns.', type: 'travel' },
    { idea: 'Visit a famous hot springs resort and relax in natural thermal baths.', type: 'travel' },
    { idea: 'Book a stay in a unique accommodation like a treehouse or overwater bungalow.', type: 'travel' },
    { idea: 'Go on a sailing adventure and explore beautiful coastal areas and hidden islands.', type: 'travel' },
    { idea: 'Travel to a city known for its culinary scene and take a food tour of local specialties.', type: 'travel' },
    { idea: 'Visit a large, bustling metropolis and enjoy its vibrant nightlife and cultural experiences.', type: 'travel' },
    { idea: 'Plan a multi-city trip and experience different cultures and attractions in each location.', type: 'travel' },
    { idea: 'Take a guided hiking tour through stunning landscapes and natural wonders.', type: 'travel' },
    { idea: 'Visit a world-famous amusement park and enjoy its rides and attractions.', type: 'travel' },
    { idea: 'Book a stay at a secluded beach resort and enjoy privacy and tranquility.', type: 'travel' },
    { idea: 'Explore a region known for its historic architecture and ancient ruins.', type: 'travel' },
    { idea: 'Take a cruise to explore multiple destinations and enjoy onboard activities.', type: 'travel' },
    { idea: 'Travel to a renowned destination for outdoor adventure sports like skiing, rock climbing, or surfing.', type: 'travel' },
    { idea: 'Visit a famous cultural landmark or world heritage site and learn about its history.', type: 'travel' },
    { idea: 'Take a scenic helicopter tour for a bird’s eye view of breathtaking landscapes.', type: 'travel' },
    { idea: 'Explore a vibrant market or bazaar in a foreign country and experience local commerce and cuisine.', type: 'travel' },
    { idea: 'Book a relaxing wellness retreat focusing on yoga, meditation, and holistic treatments.', type: 'travel' },
    { idea: 'Visit an island known for its wildlife and natural beauty, and participate in conservation efforts.', type: 'travel' },
    { idea: 'Travel to a famous ski resort and enjoy winter sports and cozy lodges.', type: 'travel' },
    { idea: 'Plan a visit to a destination known for its architectural marvels and historical significance.', type: 'travel' },
    { idea: 'Take a bike tour through a picturesque region with stops at local attractions and eateries.', type: 'travel' },
    { idea: 'Visit a country famous for its unique traditions and festivals, and participate in local celebrations.', type: 'travel' },
    { idea: 'Go on a desert adventure with camel rides, sandboarding, and stargazing.', type: 'travel' },
    { idea: 'Travel to a famous city with rich literary history and explore its literary landmarks.', type: 'travel' },
    { idea: 'Book a stay at a countryside estate and enjoy activities like horseback riding and wine tasting.', type: 'travel' },
    { idea: 'Visit a world-renowned botanical garden and explore its diverse plant collections.', type: 'travel' },
    { idea: 'Take a scenic boat tour along a famous river and admire the surrounding landscapes.', type: 'travel' },
    { idea: 'Travel to a city with vibrant street art and take a tour of its murals and installations.', type: 'travel' },
    { idea: 'Visit a famous architectural wonder and learn about its design and history.', type: 'travel' },
    { idea: 'Plan a visit to a destination known for its unique geological formations and natural landscapes.', type: 'travel' },
    { idea: 'Explore a country with a rich culinary heritage and take cooking classes to learn traditional dishes.', type: 'travel' },
    { idea: 'Take a relaxing riverboat cruise through charming towns and scenic countryside.', type: 'travel' },
    { idea: 'Visit a famous cultural institution like a major art museum or historical archive.', type: 'travel' },
    { idea: 'Travel to a destination known for its vibrant festivals and cultural events.', type: 'travel' },
    { idea: 'Plan a trip to a destination with unique wildlife and take guided tours to see rare species.', type: 'travel' }
];


export default dateIdeas;