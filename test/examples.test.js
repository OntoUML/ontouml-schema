const Ajv = require('ajv');
const assert = require('assert');
const loader = require('./loader');
const source = require('./schemas');

describe('Test valid examples for all schemas', function() {

  const schemaFiles = source.map(entry=>entry.schemaPath);
  const schemas = loader.loadJSONFiles(schemaFiles);
  const ajv = new Ajv({schemas: schemas});

  source.forEach(entry => {

    if(!entry.examplesFolder)
      return;

    describe('Test schema: '+entry.schema, function() {

      var validate = ajv.getSchema(entry.schema);
      var exampleFiles = loader.readJSONFiles(entry.examplesFolder);

      exampleFiles.forEach(fileName => {

        it('Accept example: '+fileName, () => {
          var object = loader.loadJSONFile(entry.examplesFolder+fileName);
          var isValid = validate(object);

          if(!isValid)
            console.log(validate.errors);

          assert(isValid);
        });
      });
    });
  });
});
