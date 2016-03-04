(function() {
    
    angular
      .module('yelpbarkApp')
      .filter('addHtmlLineBreaks', addHtmlLineBreaks);

    function addHtmlLineBreaks() {
      return function (text) {
        var output = text.replace(/\n/g, '<br/>');
        return output;
      };
    }

})();
