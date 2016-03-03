/* GET home page */
module.exports.about = function(req, res) {
  res.render('generic-text', { 
    title: 'About YelpBark',
    content: 'YelpBark was created to help people find the best placed to bring their four legged friends!' 
  });
};

module.exports.angularApp = function(req, res) {
  res.render('layout', { title: 'YelpBark'});
};
