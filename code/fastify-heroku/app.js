'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  //const Redis = require('ioredis')

  // Configuring rate limit

  // fastify.register(require('fastify-rate-limit'), {
  //   global: true,
  //   max: 1000000,
  //   timeWindow: '600 minute',
  //   skipOnError: true,
  //   //redis: redis
  //   redis: new Redis({host: 'localhost', port: 6379})
  //   // allowList: ['127.0.0.1'],
  //   // allowList: ['192.168.0.10'],
  // })  
  
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
