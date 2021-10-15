jest.mock('../../model/client');
jest.mock('boom');
const boom = require('boom');
const Client = require('../../model/client');
const updateClientServiceHandler = require('../../handler/updateClientServiceHandler');
const addClientServiceHandler = require('../../handler/addClientServiceHandler');

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
})