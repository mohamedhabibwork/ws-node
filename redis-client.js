const redis = require('redis');
const {promisify} = require('util');
const client = redis.createClient({
  port:process.env.REDIS_PORT || 6379,
  host:process.env.REDIS_HOST || "localhost",
  url:process.env.REDIS_URL,
});

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};