const restify = require('restify');
const logger = require('../util/logger');

module.exports = function restifyConfig() {
  const server = restify.createServer({
    log: logger,
  });

  server.on(
    'after',
    restify.plugins.auditLogger({
      log: logger,
      event: 'after',
    })
  );

  return server;
};
