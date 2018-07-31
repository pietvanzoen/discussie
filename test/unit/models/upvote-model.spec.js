const Upvote = require('../../../lib/models/upvote-model');

describe('Upvote', () => {
  let t;
  beforeEach(() => {
    t = {};
    t.upvote = new Upvote();
  });

  describe('createdAt', () => {
    it('defaults to now', () => {
      const now = Date.now();
      spyOn(Date, 'now').and.returnValue(now);

      expect(t.upvote.createdAt).toBe(now);
    });
  });
});
