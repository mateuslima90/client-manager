const defaultResponsesSchema = require('./defaultResponseSchema')

const bodyJsonSchema = {
    type: 'object',
    required: ['username', 'description', 'owner', 'team'],
    properties: {
        username: { type: 'string', minLength: 5, maxLength: 25 },
        description: { type: 'string' },
        owner: { type: 'string' },
        team: { type: 'string' }
    },
};

const addClientSchema = {
    description: 'Add Client schema successful Response',
    tags: ['clients'],
    body: bodyJsonSchema,
    response: defaultResponsesSchema
}

module.exports = addClientSchema