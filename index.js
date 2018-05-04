require('dotenv-safe').load();
const logger = require('./lib/util/logger');
logger.level(process.env.LOG_LEVEL);
logger.handleExceptions();

const server = require('./lib/app')();

server.listen(process.env.PORT, () => {
  logger.info('%s listening at %s', server.name, server.url);
  logger.exitOnException = false;
});
