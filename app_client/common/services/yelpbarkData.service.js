(function() {

angular
  .module('yelpbarkApp')
  .service('yelpbarkData', yelpbarkData);

yelpbarkData.$inject = ['$http'];
function yelpbarkData ($http) {
  var locationByCoords = function (lat, lng) {
    return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=2000000000000000000000000000000000000000000000000000000000000000000000000000');
  };

  var locationById = function(locationid) {
    return $http.get('/api/locations/' + locationid);
  };

  var addReviewById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/reviews', data);
    };

  return {
    locationByCoords : locationByCoords, 
    locationById: locationById,
    addReviewById: addReviewById
  };
}

})();
