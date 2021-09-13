const bodyJsonSchema = {
    type: 'object',
    required: ['username', 'description', 'owner', 'team'],
    properties: {
        username: { type: 'string' },
        description: { type: 'string' },
        owner: { type: 'string' },
        team: { type: 'string' }
    },
};

const addClientSchema = {
    "tags": ["clients"],
    "requestBody": bodyJsonSchema,
    "description": "Create a specific client",
    "responses": {
        "201": {
            "description": "A JSON array of clients",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Client"
                    }
                }
            }
        },
        "400": {
            "description": "Invalid Payload",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ApiResponse"
                    }
                }
            }
        },
        "409": {
            "description": "Client already exists",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ApiResponse"
                    }
                }
            }
        },
        "500": {
            "description": "Internal Server Error",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ApiResponse"
                    }
                }
            }
        }
    }
}