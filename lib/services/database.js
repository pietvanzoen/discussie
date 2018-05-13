const sqlite = require('sqlite3');

const { OPEN_CREATE, OPEN_READWRITE } = sqlite;

function create(dbPath, cb = _noop) {
  if (typeof dbPath === 'function') {
    cb = dbPath || _noop;
    dbPath = process.env.DB_PATH;
  }

  const db = new sqlite.Database(dbPath, OPEN_READWRITE | OPEN_CREATE, err => {
    if (err) return cb(err);
    db.close(err => {
      if (err) return cb(err);
      cb(null, db);
    });
  });
  return db;
}

function connect(dbPath, cb = _noop) {
  if (typeof dbPath === 'function') {
    cb = dbPath || _noop;
    dbPath = process.env.DB_PATH;
  }

  const db = new sqlite.Database(dbPath, OPEN_READWRITE, err => {
    if (err) return cb(err);
    cb(null, db);
  });
  return db;
}

function _noop() {}

module.exports = { create, connect };
