const DB = require('../services/db');

class UpvoteRepository {
  constructor() {
    const db = DB.connect();
    db.run();
    db.close();
  }

  find() {
    const db = DB.connect();

    db.run();

    db.close();
  }

  create() {}
}

module.exports = UpvoteRepository;
