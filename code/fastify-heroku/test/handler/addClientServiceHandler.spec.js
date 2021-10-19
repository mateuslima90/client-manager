jest.mock('../../model/client');
const Client = require('../../model/client');
const addClientServiceHandler = require('../../handler/addClientServiceHandler');

describe('addClientServiceHandler', () => {

    it('deve atualizar indice ao tentar salvar o Client', async () => {
        const request = {};
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        await addClientServiceHandler(request);
        expect(Client.syncIndexes).toHaveBeenCalledTimes(1);
    });

    it('deve chamar o método salvar', async () => {
        const request = {};
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        Client.prototype.save = jest.fn(() => {console.log('Client was saved')});
        await addClientServiceHandler(request);
        expect(Client.prototype.save).toHaveBeenCalled();
    });

    it('gerar uma exceção ao salvar o Client', async () => {
        const request = {};
        request.body = {};
        request.body.username = 'makingthehand-user';
        request.body.description = 'User to test';
        request.body.owner = 'Mateus Lima Fonseca';
        request.body.team = 'makingthehand';

        Client.prototype.save = jest.fn(() => { throw new Error('This is a mocker error'); });   
        addClientServiceHandler(request);
        expect(Client.prototype.save).toThrow();
    });
});