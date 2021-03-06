'use strict'

// This file contains code that we reuse
// between our tests.
const Fastify = require('fastify')
const fp = require('fastify-plugin')
const App = require('../app')

// Fill in this config with all the configurations
// needed for testing the application
function config () {
  return {}
}

// Automatically build and tear down our instance
function build () {
  const app = Fastify()

  // Require external modules
  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup

  beforeAll(async () => {
    void app.register(fp(App), await config());
    await app.ready()
  });

  afterAll(async () => app.close())

  return app
}

/*
// automatically build and tear down our instance
function build (t) {
  const app = Fastify()

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), config())

  // tear down our app after we are done
  t.tearDown(app.close.bind(app))

  return app
} */

module.exports = {
  config,
  build
}