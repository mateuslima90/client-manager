jest.mock('../../model/client');
const Client = require('../../model/client');
const updateClientServiceHandler = require('../../handler/updateClientServiceHandler');

describe('updateClientServiceHandler', () => {
    it('deve atualizar o client', async () => {
        const request = {};
        request.params = {};
        request.params.id = '6141688c42a818133556f470';
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        await updateClientServiceHandler(request, undefined)
        expect(Client.findByIdAndUpdate).toHaveBeenCalled();
    });

    it('gera uma exceção ao tentar atualizar o client', async () => {
        const request = {};
        request.params = {};
        request.params.id = '6141688c42a818133556f470';
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        Client.findByIdAndUpdate = jest.fn(() => { throw new Error('This is a mocker error'); });
        updateClientServiceHandler(request, undefined)
        expect(Client.findByIdAndUpdate).toThrow();
    });
})