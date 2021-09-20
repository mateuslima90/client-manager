'use strict'

const addClientServiceHandler = require('../../handler/addClientServiceHandler')
const getClientServiceHandler = require('../../handler/getClientServiceHandler')
const getByIdClientServiceHandler = require('../../handler/getByIdClientServiceHandler')
const updateClientServiceHandler = require('../../handler/updateClientServiceHandler')
const deleteClientServiceHandler = require('../../handler/deleteClientServiceHandler')
const addClientSchema = require('../../schemas/addClientSchema')
const getPaginationSchema = require('../../schemas/getPaginationClientSchema')
const validateSchemaErrors = require('../../preHandler/validateSchemaErrors')


module.exports = async function (fastify, opts) {
    
    fastify.route({
        handler: getClientServiceHandler,
        method: 'GET',
        path: '',
        schema: getPaginationSchema
    })

    fastify.route({
        handler: getByIdClientServiceHandler,
        method: 'GET',
        path: '/:id'
    })

    fastify.route({
        attachValidation: true,
        handler: updateClientServiceHandler,
        method: 'PUT',
        path: '/:id',
        preHandler: [validateSchemaErrors],
        schema: addClientSchema
    })

    fastify.route({
        attachValidation: false,
        handler: deleteClientServiceHandler,
        method: 'DELETE',
        path: '/:id',
    })

    fastify.route({
        attachValidation: true,
        handler: addClientServiceHandler,
        method: 'POST',
        path: '/clients',
        preHandler: [validateSchemaErrors],
        schema: addClientSchema
    });

}