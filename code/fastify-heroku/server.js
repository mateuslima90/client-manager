'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
  pluginTimeout: 10000
})

const mongoose = require('mongoose')

//Connect to DB
mongoose.connect('mongodb://172.17.0.2:27017/clientsdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})