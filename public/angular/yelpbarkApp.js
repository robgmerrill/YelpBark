angular.module('yelpbarkApp', []);

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function () {
  return function (distance) {
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'km';
      } else {
        numDistance = parseInt(distance * 1000,10);
        unit = 'm';
      }
      return numDistance + unit;
    } else {
      return "?";
    }
  };
};




var locationListCtrl = function ($scope, yelpbarkData) {
  yelpbarkData
    .success(function(data) {
      $scope.data = { locations: data };
    })
    .error(function (e) {
      console.log (e);
    });
};
  
var ratingStars = function() {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/angular/rating-stars.html'
  };
};

var yelpbarkData = function($http) {
  return $http.get('/api/locations?lng=-122.280437&lat=47.536564&maxDistance=20000000000000');
  // return [{
  //     name: 'Fremont Brewery',
  //     address: '3409 Woodland Park Ave N, Seattle, WA',
  //     rating: 4,
  //     facilities: ['Indoor', 'Outdoor', 'Water', 'Treats', 'Alcohol'],
  //     distance: '5.696456',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Seward Park',
  //     address: '5900 Lake Washington, Seattle, WA',
  //     rating: 4,
  //     facilities: ['Park', 'Outdoors'],
  //     distance: '01.5865456',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Marymoore Dog Park',
  //     address: 'Redmond, WA',
  //     rating: 5,
  //     facilities: ['Dog Park', 'Off Leash', 'Outside'],
  //     distance: '25.4',
  //     _id: '5370a35f2536f6785f8dfb6a'
  //   },{
  //     name: 'Genesee Dog Park',
  //     address: '4599 S Genesee St, Seattle, WA',
  //     rating: 3,
  //     facilities: ['Dog Park', 'Off Leash', 'Outside'],
  //     distance: '2.26548',
  //     _id: '5370a35f2536f6785f8dfb6a'
  // }];
};

angular
  .module('yelpbarkApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('yelpbarkData', yelpbarkData)
