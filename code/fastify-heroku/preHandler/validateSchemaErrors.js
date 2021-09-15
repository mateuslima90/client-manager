function validateSchemaErrors(request, reply, done) {

    if (!request.validationError) return done();
    console.log("================== SCHEMA VALIDATION ERROR =============== ");
    console.log(request.validationError);
    reply.code(400).send("Schema validation failed!");
    return done();
    
}

module.exports = validateSchemaErrors;