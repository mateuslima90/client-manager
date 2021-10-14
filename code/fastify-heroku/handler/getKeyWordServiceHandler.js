const Client = require('../model/client');
const boom = require('boom');

async function getKeyWordServiceHandler(request, reply) {
    console.log(`username: ${request.query.username}`)
    return await Client.find({username: { $regex: request.query.username }}) 
}

module.exports = getKeyWordServiceHandler