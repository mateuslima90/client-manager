const defaultResponseSchema = {
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
