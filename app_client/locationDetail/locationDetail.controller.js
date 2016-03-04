(function () {

  angular
    .module('yelpbarkApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams', 'yelpbarkData'];
  function locationDetailCtrl ($routeParams, yelpbarkData) {
    var vm = this;
    vm.locationid = $routeParams.locationid;

    yelpbarkData.locationById(vm.locationid)
      .success(function(data) {
        vm.data = { location: data };
        vm.pageHeader = {
          title: vm.data.location.name
        };
      })
      .error(function (e) {
        console.log(e);
      });
  }

})();

// (function () {

//   angular
//     .module('yelpbarkApp')
//     .controller('locationDetailCtrl', locationDetailCtrl);

//   locationDetailCtrl.$inject = ['$routeParams'];
//   function locationDetailCtrl ($routeParams) {
//     var vm = this;
//     vm.locationid = $routeParams.locationid;

//         vm.pageHeader = {
//           title: vm.locationid
//         };
//       }
// )}();
      
