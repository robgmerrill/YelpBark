(function () {

  angular
    .module('yelpbarkApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

  locationDetailCtrl.$inject = ['$routeParams', '$modal', 'yelpbarkData'];
  function locationDetailCtrl ($routeParams, $modal, yelpbarkData) {
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
      vm.popupReviewForm = function () {
        var modalInstance = $modal.open({
          templateUrl: '/reviewModal/reviewModal.view.html',
          controller: 'reviewModalCtrl as vm'
        })
      };
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
      
