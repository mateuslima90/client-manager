const Client = require('../model/client');
const boom = require('boom');

async function getClientServiceHandler(request, reply) {
  try {
    return await validatePageAndSize(request)
  } catch (err) {
    throw boom.boomify(err)
  }
}

async function validatePageAndSize(request) {
  const pages = Number(request.query.page)
  const size = Number(request.query.size)
  const totalClients = await Client.count()
  
  if(pages >= 0 && size > 0 && pages <= clientsPagination(totalClients,size)) {
    const clients = await Client.find({}).sort({username: 'desc', team: 'desc'}).skip(pages*size).limit(size)
    return { content: clients, page: pages, size: size, total: totalClients, totalPages: (totalClients/size)-1}
  }
  else {
    return { content: [], page: pages, size: size, total: totalClients, totalPages: (totalClients/size)-1}
  }
}

function clientsPagination(totalClients, size) {
  return Math.round((totalClients/size)-1)
}

module.exports = getClientServiceHandler;