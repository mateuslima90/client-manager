//jest.mock('../../model/client');
jest.mock('boom');
const Client = require('../../model/client');

const mMock = jest.fn();
// Client.mockImplementation(() => {
//     return {
//         init: mMock,
//         save: mMock,
//     };
// });

Client.prototype.save = mMock;

const boom = require('boom');
const addClientServiceHandler = require('../../handler/addClientServiceHandler');

describe('addClientServiceHandler', () => {
    it('deve atualizar indice ao tentar salvar o Client', async function() {
        const request = {};
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        Client.prototype.save = jest.fn(() => console.log('Client was saved'));

        addClientServiceHandler(request);
        //expect(Client.syncIndexes).toHaveBeenCalledTimes(1);
        expect(Client.prototype.save).toBeCalled();
    });
});