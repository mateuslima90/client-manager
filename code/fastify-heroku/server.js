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

//Connect to DB
// const mongoose = require('mongoose')

// const dbHost = process.env.DB_HOST
// const dbName = process.env.DB_NAME

// console.log(dbHost)
// const url = `mongodb://${dbHost}/${dbName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
    
// mongoose.connect(url)
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err))

//mongodb-service
//'mongodb://172.17.0.3:27017/clientsdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
//mongodb://mongodb-service/clientsdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

//const kubeMongoDB = 'mongodb://mongodb-service/clientsdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
//const localMongoDB = 'mongodb://172.17.0.2:27017/clientsdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})