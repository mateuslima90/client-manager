const Client = require('../model/client');
const boom = require('boom');

async function getClientServiceHandler(request, reply) {
  try {
    return Client.find({}).sort({username: 'desc', team: 'desc'}).limit(5)
  } catch (err) {
    throw boom.boomify(err)
  }
};

module.exports = getClientServiceHandler;