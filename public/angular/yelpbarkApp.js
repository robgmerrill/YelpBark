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

// var geolocation = function () {
//   var getPosition = function (cbSuccess, cbError, cbNoGeo) {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
//     }
//     else {
//       cbNoGeo();
//     }
//   };
//   return {
//     getPosition : getPosition
//   };
// };

var locationListCtrl = function ($scope, yelpbarkData, geolocation) {
//   $scope.message = "Checking your location";

//   $scope.getData = function (position) {
//     var lat = position.coords.latitude,
//         lng = position.coords.longitude;
//     $scope.message = "Searching for nearby places";
//     yelpbarkData.locationByCoords(lat, lng)
//       .success(function(data) {
//         $scope.message = data.length > 0 ? "" : "No locations found nearby";
//         $scope.data = { locations: data };
//       })
//       .error(function (e) {
//         $scope.message = "Sorry, something's gone wrong, please try again later";
//       });
//   };

//   $scope.showError = function (error) {
//     $scope.$apply(function() {
//       $scope.message = error.message;
//     });
//   };

//   $scope.noGeo = function () {
//     $scope.$apply(function() {
//       $scope.message = "Geolocation is not supported by this browser.";
//     });
//   };

//   geolocation.getPosition($scope.getData,$scope.showError,$scope.noGeo);
// };
  
var ratingStars = function() {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/angular/rating-stars.html'
  };
};

// var yelpbarkData = function ($http) {
//   var locationByCoords = function (lat, lng) {
//     return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=2000000000000000000000000000000000000000000000000000');
//   };
//   return {
//     locationByCoords : locationByCoords
//   };
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
  .service('geolocation', geolocation);
