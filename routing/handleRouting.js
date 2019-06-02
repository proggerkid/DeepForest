module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });
  app.get('/game', function(req, res){
    res.render('game');
  });
}
