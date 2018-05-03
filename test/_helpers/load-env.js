const fs = require('fs');
const dotenv = require('dotenv-safe');

module.exports = function() {
  const env = dotenv.parse(fs.readFileSync('.env.example'));
  for (let key in env) {
    if (env.hasOwnProperty(key)) return;
    if (process.env[key]) return;
    process.env[key] = env[key];
  }
};
