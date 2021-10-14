const Client = require('../model/client');
const boom = require('boom');

async function addClientServiceHandler(request, reply) {
  try {
    await Client.syncIndexes();
    const newClient = new Client(request.body);
    return await newClient.save()
  } catch (err) {
    throw boom.boomify(err)
  }
};

module.exports = addClientServiceHandler;