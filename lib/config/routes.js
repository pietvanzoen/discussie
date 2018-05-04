module.exports = function routes(server) {
  server.get('/upvote', respond);
  server.post('/upvote', respond);
};

function respond(req, res, next) {
  res.send({ ok: true });
  return next();
}
