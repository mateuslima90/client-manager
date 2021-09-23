const Client = require('../model/client');
const boom = require('boom');

async function getKeyWordServiceHandler(request, reply) {
    return Client.find({$text: {$search: request.query.search}})
}

module.exports = getKeyWordServiceHandler