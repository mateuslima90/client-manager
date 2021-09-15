const client = require('../model/client')
const boom = require('boom')

async function getByIdClientServiceHandler(request, reply) {
    try {
        const oid = request.params.id
        return client.findById({_id: oid})
    } catch (error) {
        throw boom.boomify(error)
    }
}

module.exports = getByIdClientServiceHandler;