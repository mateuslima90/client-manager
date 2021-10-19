const validateSchemaErrors = require('../../../preHandler/validateSchemaErrors');

describe('validateSchemaErrors', () => {
    it('requisição validado sem erro', () => {
        const request = {};
        request.validationError = false;
        const reply = {};
        const done = jest.fn(() => {console.log('Requisição processada com sucesso')})

        validateSchemaErrors(request, reply, done)
        expect(done).toHaveBeenCalled();
    });

    it('requisição validado com erro', () => {
        const request = {};
        request.validationError = true;
        const reply = {};
        
        const done = jest.fn(() => {console.log('Requisição processada com erro')})
        
        const validationReturn = {};
        validationReturn.send = function() { console.log("Schema validation failed!")}

        reply.code = jest.fn(() => validationReturn)

        validateSchemaErrors(request, reply, done)
        expect(reply.code).toHaveBeenCalled();
    })
});