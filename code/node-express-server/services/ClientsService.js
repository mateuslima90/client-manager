/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a client
* Return a specific client
*
* inlineObject InlineObject 
* returns Client
* */
const createSingleClient = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete Client by Id
* Delete a specific client
*
* clientId String ID of pet to fetch
* returns Client
* */
const deleteSingleClient = ({ clientId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        clientId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Return a list of clients
* Return all clients from IDP Provider
*
* returns List
* */
const getAllClient = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Search Client by Id
* Return a specific client
*
* clientId String ID of pet to fetch
* returns Client
* */
const getSingleClient = ({ clientId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        clientId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update Client by Id
* Update a specific client
*
* clientId String ID of pet to fetch
* inlineObject1 InlineObject1 
* returns Client
* */
const updateSingleClient = ({ clientId, inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        clientId,
        inlineObject1,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createSingleClient,
  deleteSingleClient,
  getAllClient,
  getSingleClient,
  updateSingleClient,
};
