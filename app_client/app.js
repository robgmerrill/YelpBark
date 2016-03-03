(function() {

angular.module('yelpbarkApp', ['ngRoute']);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'

    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('yelpbarkApp')
  .config(['$routeProvider', config]);

})();
