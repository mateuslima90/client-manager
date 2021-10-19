const { build } = require('../../helper');

describe('Client Routes', () => {
    const app = build(this)

    // I need to fix this test code
    it('Deve gerar um erro 400 ao tentar criar um client requisição sem body', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        })

        expect(res.statusCode).toBe(400)
    });

    it('Deve gerar um erro 400 ao tentar criar um client requisição com body de string', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: '',
            headers: { 'Content-Type': 'application/json'}
        })

        expect(res.statusCode).toBe(400)
    });

    it('Deve gerar um erro 400 ao tentar criar um client requisição com body objeto vazio', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {},
            headers: { 'Content-Type': 'application/json'}
        })

        expect(res.statusCode).toBe(400)
    });
})