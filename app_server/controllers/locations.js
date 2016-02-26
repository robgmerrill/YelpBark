/* GET home page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', { 
    title: 'YelpBark - find great places to bring your four legged friends!', 
    pageHeader: {
      title: 'YelpBark',
      strapline: 'Find great places to bring your four legged friends!'
    },
    sidebar: "Looking for a place to bring your four legged friend? We have found the place for you! Join in and help others find great places for their four legged friends!",
    locations: [{
      name: 'Fremont Brewery',
      address: '125 High Street, Reading, RG6 1PS', 
      rating: 5,
      facilities: ['Indoor', 'Outdoor', 'Water Bowl', 'Treats'],
      distance: '100m'
    }, {
      name: 'Seward Park',
      address: '125 High Street, Reading, RG6 1PS', 
      rating: 5,
      facilities: ['Outdoor', 'Walk'],
      distance: '100m'
    }, {
      name: 'Marymoore Park',
      address: '125 High Street, Reading, RG6 1PS', 
      rating: 5,
      facilities: ['Outdoor', 'Walk', 'Dog Park'],
      distance: '100m'
    }]
  });
};

/* GET location info page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review' });
};
