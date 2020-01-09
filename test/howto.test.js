
test('README tutorial test', () => {
    // Start of tutorial script
    const schemas = require('ontouml-schema');
    const Ajv = require('ajv');

    let validator = new Ajv().compile(schemas.getSchema(schemas.ONTOUML_2));
    let model = {
        "@type": "Model",
        "id": "m1",
        "name": "My Model",
        "authors": null,
        "elements": null
    };
    let isValid = validator(model);

    if(isValid) {
        console.log(`Model ${model.name} is valid!`);
    }
    else {
        console.log(`Model ${model.name} is NOT valid!`);
        console.log(validator.errors);
    }
    // End of tutorial script

    expect(isValid).toBeTruthy();
})