const request = require('supertest');
const app = require('../../lib/app');

describe('/upvote', function() {
  let t;

  beforeEach(() => {
    t = {};
    t.api = request(app());
  });

  describe('GET', () => {
    it('returns 200', async () => {
      await t.api.get('/upvote').expect(200);
    });
  });

  describe('POST', () => {
    it('returns 200', async () => {
      await t.api.post('/upvote').expect(200);
    });
  });
});
