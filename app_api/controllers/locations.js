var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function(req, res) {
  sendJSONresponse(res, 200, {"status": "success"});
};
