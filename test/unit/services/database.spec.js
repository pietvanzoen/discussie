const sqlite = require('sqlite3');
const Database = require('../../../lib/services/database');

const fs = require('fs');

describe('Database', () => {
  let t;
  beforeEach(() => {
    t = {};
    t.dbPath = `./test-${Date.now()}.db`;
  });

  afterEach(() => unlinkIfExists(t.dbPath));

  describe('::create', () => {
    it('creates db file', done => {
      Database.create(t.dbPath, () => {
        fs.access(t.dbPath, done);
      });
    });

    it('calls back with db instance', done => {
      Database.create(t.dbPath, (err, db) => {
        expect(db.constructor).toBe(sqlite.Database);
        done();
      });
    });

    it('automatically closes connection', done => {
      Database.create(t.dbPath, (err, db) => {
        expect(db.open).toBe(false);
        done();
      });
    });

    it('triggers callback with error if it can not connect', done => {
      Database.create('non-existent/directory/test.db', err => {
        expect(err.message).toMatch(/SQLITE_CANTOPEN/);
        done();
      });
    });

    it('defaults to using process.env.DB_PATH', done => {
      process.env.DB_PATH = t.dbPath;
      Database.create((err, db) => {
        expect(db.filename).toBe(t.dbPath);
        done();
      });
      process.env.DB_PATH = '';
    });
  });

  describe('::connect', () => {
    beforeEach(done => Database.create(t.dbPath, done));

    afterEach(() => t.db.close());

    it('returns db instance', () => {
      t.db = Database.connect(t.dbPath);

      expect(t.db.constructor).toBe(sqlite.Database);
    });

    it('triggers callback with db instance', done => {
      t.db = Database.connect(t.dbPath, (err, db) => {
        expect(db.constructor).toBe(sqlite.Database);
        done();
      });
    });

    it('keeps connection open', done => {
      t.db = Database.connect(t.dbPath, (err, db) => {
        expect(db.open).toBe(true);
        done();
      });
    });

    it('can not create databases', done => {
      t.db = Database.connect(`./test-foo-${Date.now()}.db`, err => {
        expect(err.message).toMatch(/SQLITE_CANTOPEN/);
        done();
      });
    });

    it('defaults to using process.env.DB_PATH', done => {
      process.env.DB_PATH = t.dbPath;
      t.db = Database.connect((err, db) => {
        expect(db.filename).toBe(t.dbPath);
        done();
      });
      process.env.DB_PATH = '';
    });
  });
});

function unlinkIfExists(file) {
  return new Promise(resolve => {
    fs.unlink(file, () => resolve());
  });
}
