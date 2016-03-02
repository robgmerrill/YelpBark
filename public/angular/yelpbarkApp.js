angular.module('yelpbarkApp', []);

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function () {
  return function(distance) {
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

var locationListCtrl = function ($scope) {
  $scope.data = {
    locations: [{
      name: 'Fremont Brewery',
      address: '3409 Woodland Park Ave N, Seattle, WA',
      rating: 4,
      facilities: ['Indoor', 'Outdoor', 'Water', 'Treats'],
      distance: '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Seward Park',
      address: '5900 Lake Washington, Seattle, WA',
      rating: 4,
      facilities: ['Park', 'Outdoors'],
      distance: '0.7865456',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Marymoore Dog Park',
      address: 'Redmond, WA',
      rating: 5,
      facilities: ['Dog Park', 'Off Leash', 'Outside'],
      distance: '25.4',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 1,
      facilities: ['Hot drinks', 'Food', 'Cold drinks'],
      distance: '1.06548',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Simon\'s cafe',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '2.3654',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Sally\'s pub',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 5,
      facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
      distance: '4.213654',
      _id: '5370a35f2536f6785f8dfb6a'
    }]};
    };
  
var ratingStars = function() {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/angular/rating-stars.html'
  };
};

angular
  .module('yelpbarkApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
