(function() {
  
angular
    .module('yelpbarkApp')
    .directive('ratingStars', ratingStars);

  function ratingStars () {
    return {
      restrict: 'EA',
      scope: {
        thisRating : '=rating'
      },
      templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
    };
  }

})();
