jest.mock('../../model/client');
jest.mock
const Client = require('../../model/client');

const getClientServiceHandler = require('../../handler/getClientServiceHandler');

describe('getClientServiceHandler', () => {
    it('deve buscar todas os clients com retorno paginado', async () => {
        const request = {}
        request.query = {}
        request.query.page = '1'
        request.query.size = '1'

        // I need to fix this test
        Client.count = jest.fn(() => 20)
        Client.find = jest.fn(() => {console.log('Client List')});
        await getClientServiceHandler(request)
        //expect(Client.find).toHaveBeenCalled()
    });
    
    it('gerar erro ao buscar todas os clients', async () => {
        const request = {}
        request.query = {}
        request.query.page = '1'
        request.query.size = '1'

        Client.find = jest.fn(() => { throw new Error('Erro ao buscar todos os clients')} )
        getClientServiceHandler(request)
        expect(Client.find).toThrow()
    })
});