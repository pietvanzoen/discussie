const Database = require('../services/db');

module.exports = function databaseConfig() {
  return new Promise((resolve, reject) => {
    Database.create(err => {
      if (err) return reject(err);
      resolve();
    });
  });
};
