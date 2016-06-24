
module.exports = {
    "get": function (req, res, next) {
       var query = {
          sql: 'SELECT email, firstName, lastName, photoUrl FROM users",
          parameters: []
      };
      req.azureMobile.data.execute(query)
      .then(function (results) {
          res.json({ users: results });
      });
    }
}
