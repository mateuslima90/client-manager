jest.mock('../../model/client');
const deleteClientServiceHandler = require('../../handler/deleteClientServiceHandler');
const Client = require('../../model/client');

describe('deleteClientServiceHandler', () => {
    it('deve deletar o client pelo ID', async () => {
        const request = {};
        request.params = {};
        request.params.id = '6141688c42a818133556f470';

        await deleteClientServiceHandler(request);
        expect(Client.findByIdAndDelete).toHaveBeenCalled();
    });

    it('gera exceção ao deletar um client', async () => {
        const request = {};
        request.params = {};
        request.params.id = '6141688c42a818133556f470';

        Client.findByIdAndDelete = jest.fn(() => { throw new Error('Error ao tentar deletar o client')} )
        deleteClientServiceHandler(request);
        expect(Client.findByIdAndDelete).toThrow();
    })
});