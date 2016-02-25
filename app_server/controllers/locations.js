/* GET home page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', { title: 'Home' });
};

/* GET location info page */
module.exports.locationInfo = function(req, res) {
  res.render('index', { title: 'Location info' });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
  res.render('index', { title: 'Add review' });
};
