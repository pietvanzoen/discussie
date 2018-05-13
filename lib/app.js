const database = require('./config/database');
const restify = require('./config/restify');
const routes = require('./config/routes');

module.exports = function() {
  return Promise.resolve()
    .then(database)
    .then(restify)
    .then(routes);
};
