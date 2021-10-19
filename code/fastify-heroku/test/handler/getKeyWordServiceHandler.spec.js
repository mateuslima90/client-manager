jest.mock('../../model/client')
const Client = require('../../model/client')
const getKeyWordServiceHandler = require('../../handler/getKeyWordServiceHandler')

describe('getKeyWordServiceHandler', () => {
    it('deve buscar clients que contém palavra chave', async () => {
        const request = {}
        request.query = {}
        request.query.username = 'mak'

        await getKeyWordServiceHandler(request)
        expect(Client.find).toHaveBeenCalled()
    });

    it('gera uma exceção tentar buscar clients por palavra chave', async () => {
        const request = {}
        request.query = {}
        request.query.username = 'mak'

        Client.find = jest.fn(() => { throw new Error('Erro ao buscar os clients')})
        getKeyWordServiceHandler(request)
        expect(Client.find).toThrow()
    })
})