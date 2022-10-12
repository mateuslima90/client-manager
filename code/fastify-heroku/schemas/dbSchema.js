const dbSchema = {
    type: 'object',
    required: ['DB_HOST', 'DB_NAME'],
    properties: {
        DB_HOST: {
            type: 'string'
        },
        DB_NAME: {
            type: 'string'
        }
    }
}

module.exports = dbSchema