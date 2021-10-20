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

    afterAll(() => Client.deleteMany())

    afterAll((done) => {
        mongoose.connection.close()
        done();
    })

    var userCreated = {}
    const usernameCreated = 'makingthehand-user41'

    it('Deve criar um client com sucesso', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': usernameCreated,
                'description': 'User Test',
                'owner': 'mateuslima90',
                'team': 'makingthehand'
            },
            headers: { 'Content-Type': 'application/json'}  
        })

        userCreated = JSON.parse(res.body)._id
        expect(res.statusCode).toBe(200)
    });

    it('Deve falhar a criação de um client', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': 'mk'
            },
            headers: { 'Content-Type': 'application/json'}  
        })

        expect(res.statusCode).toBe(500)
    });

    it('Deve buscar um client pelo ID com sucesso', async () => {
        const res = await app.inject({
            url: `clients/${userCreated}`,
            method: 'GET'
        })
        expect(res.statusCode).toBe(200)
    })

    it('Deve buscar um client por palavra chave', async () => {
        const res = await app.inject({
            url: 'clients/search?username=user',
            method: 'GET'
        })

        const objectUsername = JSON.parse(res.body)[0].username
        expect(objectUsername).toBe(usernameCreated)
    })

    it('Deve retornar uma lista vazia a partir de uma palavra chave', async () => {
        const res = await app.inject({
            url: 'clients/search?username=usuario',
            method: 'GET'
        })

        const emptyList = JSON.parse(res.body).length
        expect(emptyList).toBe(0)
    })

    it('Deve buscar uma lista de clients', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': 'makingthehand-user30',
                'description': 'User Test',
                'owner': 'mateuslima90',
                'team': 'makingthehand'
            },
            headers: { 'Content-Type': 'application/json'}  
        })

        const res2 = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': 'makingthehand-user31',
                'description': 'User Test',
                'owner': 'mateuslima90',
                'team': 'makingthehand'
            },
            headers: { 'Content-Type': 'application/json'}  
        })

        const res3 = await app.inject({
            url: '/clients?page=0&size=2',
            method: 'GET'
        })

        expect(JSON.parse(res3.body).size).toBe(2)
    })

    it('Deve retornar uma lista vazia', async () => {
        const res = await app.inject({
            url: '/clients?page=1&size=20',
            method: 'GET'
        })

        expect(JSON.parse(res.body).content.length).toBe(0)
    })

    it('Deletar um client pelo Id', async () => {
        const res = await app.inject({
            url: '/clients/clients',
            method: 'POST',
            payload: {
                'username': 'makingthehand-user50',
                'description': 'User Test',
                'owner': 'mateuslima90',
                'team': 'makingthehand'
            },
            headers: { 'Content-Type': 'application/json'}  
        })

        const resDelete = await app.inject({
            url: `/clients/${JSON.parse(res.body)._id}`,
            method: 'DELETE'
        })

        const resGet = await app.inject({
            url: `/clients/${JSON.parse(res.body)._id}`,
            method: 'GET'
        })

        expect(resDelete.statusCode).toBe(200)
        expect(JSON.parse(resGet.body)).toBe(null)
    })
})
