const Client = require('../model/client');
const boom = require('boom');

async function getClientServiceHandler(request, reply) {
  try {
    return Client.find()
  } catch (err) {
    throw boom.boomify(err)
  }
};

module.exports = getClientServiceHandler;