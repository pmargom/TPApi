
module.exports = {
    "get": function (req, res, next) {
       var query = {
          //sql: 'SELECT * FROM users',
          sql: 'GetUsers',
          parameters: []
      };
      req.azureMobile.data.execute(query)
      .then(function (results) {
          res.json({ users: results });
      });
    }
}
