/**
 * The ClientsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ClientsService');
const createSingleClient = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSingleClient);
};

const deleteSingleClient = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSingleClient);
};

const getAllClient = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllClient);
};

const getSingleClient = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleClient);
};

const updateSingleClient = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSingleClient);
};


module.exports = {
  createSingleClient,
  deleteSingleClient,
  getAllClient,
  getSingleClient,
  updateSingleClient,
};
