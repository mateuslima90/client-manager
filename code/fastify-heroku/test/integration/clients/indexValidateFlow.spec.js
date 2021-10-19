const { build } = require('../../helper')
const Client = require('../../../model/client')

const mongoose = require('mongoose')

describe('Client Routes validating the flow', () => {
    const app = build(this)

    beforeAll((done) => {
        mongoose.connect('mongodb://172.17.0.2:27017/clientsdbTest?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err))

        done();
    })

    afterAll((done) => {
        mongoose.connection.close()
        done();
    })

    it('Deve criar um client com sucesso', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': 'makingthehand-user26',
                'description': 'User Test',
                'owner': 'mateuslima90',
                'team': 'makingthehand'
            },
            headers: { 'Content-Type': 'application/json'}  
        })
        expect(res.statusCode).toBe(200)
    });
})
