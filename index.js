require('dotenv-safe').load();
const logger = require('./lib/util/logger');
logger.level(process.env.LOG_LEVEL);
logger.handleExceptions();

require('./lib/app')()
  .then(server => {
    server.listen(process.env.PORT, () => {
      logger.info('%s listening at %s', server.name, server.url);
      logger.exitOnException = false;
    });
  })
  .catch(err => {
    logger.fatal(err);
    process.exit(1);
  });
