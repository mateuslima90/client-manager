const Client = require('../model/client');
const boom = require('boom');

async function addClientServiceHandler(request, reply) {
  try {
    const newClient = new Client(request.body);
    return newClient.save()
  } catch (err) {
    throw boom.boomify(err)
  }
};

module.exports = addClientServiceHandler;