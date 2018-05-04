const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'discussie' });

logger.exitOnException = true;
logger.handleExceptions = function handleExceptions() {
  process.on('uncaughtException', function(error) {
    logger.error(error);
    if (logger.exitOnException) {
      process.exit(1);
    }
  });
};

module.exports = logger;
