angular
  .module('yelpbarkApp')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl ($scope) {
    $scope.pageHeader = {
      title: 'YelpBark',
      strapline: 'Find great places to bring your four legged friends!'
    };
    $scope.sidebar = {
      content: "looking for a great place to bring your four legged friend? We have found it for you!"
    };
  }
