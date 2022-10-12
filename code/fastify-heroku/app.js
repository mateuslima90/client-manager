'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const dbSchema = require('./schemas/dbSchema')

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  //npconst Redis = require('ioredis')

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

  const fastifyEnv = require('fastify-env')
  const options = {
    confKey: 'config', // optional, default: 'config'
    schema: dbSchema,
    dotenv: {
      path: `${__dirname}/.env`,
      debug: true
    },
    data: process.env // optional, default: process.env
  }

  fastify.register(require('fastify-jaeger'), {
    serviceName: 'client-manager'
  })
  
  fastify
    .register(fastifyEnv, options)
    .ready((err) => {
      if (err) console.error(err)
  
      console.log(fastify.config) // or fastify[options.confKey]
      // output: { PORT: 3000 }

      //Connect to DB
      const mongoose = require('mongoose')

      const dbHost = fastify.config.DB_HOST
      const dbName = fastify.config.DB_NAME

      console.log(dbHost)
      const url = `mongodb://${dbHost}/${dbName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
          
      mongoose.connect(url)
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err))
  })

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
