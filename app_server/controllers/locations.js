var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://shrouded-badlands-46157.herokuapp.com/";
}

var renderHomepage = function(req, res, responseBody) {
  res.render('locations-list', { 
      title: 'YelpBark - find great places to bring your four legged friends!', 
      pageHeader: {
        title: 'YelpBark',
        strapline: 'Find great places to bring your four legged friends!'
      },
      sidebar: "Looking for a place to bring your four legged friend? We have found the place for you! Join in and help others find great places for their four legged friends!",
      locations: responseBody
    });
  };

/* GET home page */
module.exports.homelist = function(req, res) {
  var requestOptions, path;
  path = '/api/locations';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs: {
      lng: -0.9690884, 
      lat: 51.455041,
      maxDistance: 2000000
    }
  };
  request (
    requestOptions,
    function(err, response, body) {
      renderHomepage(req, res, body);
    }
  );
};
  

/* GET location info page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review' });
};
