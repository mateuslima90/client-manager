'use strict'

const addClientServiceHandler = require('../../handler/addClientServiceHandler')
const addClientSchema = require('../../schemas/addClientSchema')

module.exports = async function (fastify, opts) {
    
    // fastify.get('/clients', async function (request, reply) {
    //   return 'Return all clients from IDP Provider'
    // })

    // fastify.post('/client', async function (request, reply) {
    //     return 'Create a specific client'
    // })

    // fastify.get('/clients/:clientId', async function (request, reply) {
    //     return 'Return a specific client'
    // })

    // fastify.put('/clients/:clientId', async function (request, reply) {
    //     return 'Update a specific client'
    // })

    // fastify.delete('/clients/:clientId', async function (request, reply) {
    //     return 'Delete a specific client'
    // })
    
    fastify.route({
        //attachValidation: true,
        handler: addClientServiceHandler,
        method: 'POST',
        path: '/client',
        //preHandler: [validateSchemaErrors],
        schema: addClientSchema
      });

}