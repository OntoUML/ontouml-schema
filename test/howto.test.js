test('README tutorial test', () => {
  // Start of tutorial script
  const schemas = require('ontouml-schema');
  const Ajv = require('ajv');

  let validator = new Ajv().compile(schemas.getSchema(schemas.ONTOUML_2));
  let model = {
    type: 'Package',
    id: 'm1',
    name: 'My Model',
    description: null,
    contents: null,
    propertyAssignments: null,
  };
  let isValid = validator(model);

  if (isValid) {
    console.log(`Model ${model.name} is valid!`);
  } else {
    console.log(`Model ${model.name} is NOT valid!`);
    console.log(validator.errors);
  }
  // End of tutorial script

  expect(isValid).toBeTruthy();
});
