(function () {

  angular.module('yelpbarkApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: '/common/views/genericText.view.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      // .when('/location/:locationid', {
      //   templateUrl: '/locationDetail/locationDetail.view.html',
      //   controller: 'locationDetailCtrl',
      //   controllerAs: 'vm'
      // })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  angular
    .module('yelpbarkApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();
