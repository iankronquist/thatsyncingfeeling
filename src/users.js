module.exports = function(app) {
  var knex = app.get('knex');

  app.get('/users', function (req, res) {
    knex('users').then(function (users) {
      return res.send(users);
    });
  });

  app.post('/users/add', function (req, res) {
    knex('users').insert(req.body).then(function (users) {
      knex('users').where(req.body).then(function (user_returned) {
        return res.send(user_returned);
      }).catch(function (error) {
        return res.send(error);
      });
    }).catch(function (error) {
      return res.send(error);
    });
  });

}
