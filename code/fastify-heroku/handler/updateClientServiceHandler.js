const client = require('../model/client')
const boom = require('boom')

async function updateClientServiceHandler(request, reply) {
    try {
        return client.findByIdAndUpdate({_id: request.params.id, update: request.body})
    } catch (error) {
        throw boom.boomify(error);
    }
}

module.exports = updateClientServiceHandler;