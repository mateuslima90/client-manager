jest.mock('../../model/client')
const Client = require('../../model/client')
const getByIdClientServiceHandler = require('../../handler/getByIdClientServiceHandler')

describe('getByIdClientServiceHandler', () => {
    it('deve buscar um client pelo Id', async () => {
        const request = {}
        request.params = {}
        request.params.id = '6141688c42a818133556f470'

        await getByIdClientServiceHandler(request)
        expect(Client.findById).toHaveBeenCalled()
    })

    it('deve gerar uma exceção ao buscar um client pelo id', async () => {
        const request = {}
        request.params = {}
        request.params.id = '6141688c42a818133556f470'

        Client.findById = jest.fn(() => { throw new Error('Exceção ao buscar um client')})
        getByIdClientServiceHandler(request)
        expect(Client.findById).toHaveBeenCalled()
    })    
})