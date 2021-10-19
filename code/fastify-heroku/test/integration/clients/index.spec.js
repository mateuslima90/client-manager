const { build } = require('../../helper');

describe('Client Routes', () => {
    const app = build(this)

    // I need to fix this test code
    it('Deve gerar um erro ao tentar criar um client', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {}
        })

        expect(res.statusCode).toBe(500)
    });

    it('Deve gerar um erro ao tentar criar um client', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: ''
        })

        expect(res.statusCode).toBe(500)
    });
})