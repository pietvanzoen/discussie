const restify = require('./config/restify');
const routes = require('./config/routes');

module.exports = function() {
  const server = restify();
  routes(server);
  return server;
};
