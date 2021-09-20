const Client = require('../model/client');
const boom = require('boom');

async function getClientServiceHandler(request, reply) {
  try {
    validatePageAndSize(request)
    console.log(`Page: ${request.query.page}`)
    console.log(`Size: ${request.query.size}`)
    return Client.find({}).sort({username: 'desc', team: 'desc'}).skip(request.query.page).limit(request.query.size)
  } catch (err) {
    throw boom.boomify(err)
  }
};

function validatePageAndSize(request) {
  if(request.params.page >= 0 && request.params.size >0){
    return request
  }
}

module.exports = getClientServiceHandler;