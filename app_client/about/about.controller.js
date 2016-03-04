(function () {

  angular
    .module('yelpbarkApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About yelpbark'
    };
    vm.main = {
      content: 'YelpBark was created to help people find the best places to bring their four legged friends. Looking to have a beer while taking your dog out? Just type beer and you will see all the dog friendly beer locations. \n\nAlso, leave reviews to help people know what they can experience when they visit locations all around them!'
    };
  }

})();
