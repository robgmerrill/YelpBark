angular
  .module('yelpbarkApp')
  .service('yelpbarkData', yelpbarkData);

function yelpbarkData ($http) {
  var locationByCoords = function (lat, lng) {
    return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=2000000000000000000000000000000000000000000000000000');
  };
  return {
    locationByCoords : locationByCoords
  };
}
