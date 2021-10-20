const client = require('../model/client')
const boom = require('boom')

async function deleteClientServiceHandler(request, reply) {
    try {
        return client.findByIdAndDelete({_id: request.params.id})
    } catch (error) {
        throw boom.boomify(error)
    }
}

module.exports = deleteClientServiceHandler