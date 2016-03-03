angular
  .module('yelpbarkApp')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl ($scope, yelpbarkData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'YelpBark',
      strapline: 'Find great places to bring your four legged friends!'
    };
    vm.sidebar = {
      content: "looking for a great place to bring your four legged friend? We have found it for you!"
    };
    vm.message = "Checking your location";

  vm.getData = function (position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;
    vm.message = "Searching for nearby places";
    yelpbarkData.locationByCoords(lat, lng)
      .success(function(data) {
        vm.message = data.length > 0 ? "" : "No locations found nearby";
        vm.data = { locations: data };
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
  };

  vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

  vm.noGeo = function () {
    $scope.$apply(function() {
      vm.message = "Geolocation is not supported by this browser.";
    });
  };

  geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);
};



  
