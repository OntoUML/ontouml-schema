const Ajv = require('ajv');
const fs = require('fs');

let schemaFiles = [
  "schemas/ontouml.schema.json"
];

let schemas = schemaFiles.map( file => {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
})

let ajv = new Ajv({schemas: schemas});
let validate = ajv.getSchema("https://ontouml.org/OntoUMLSchema/v1/Model");

let object = JSON.parse(fs.readFileSync("examples/m1.example.json", 'utf8'))
let isValid = validate(object);

if(isValid)
  console.log("Model M1 is VALID!");
else {
  console.log("Model M1 is INVALID!");
  console.log(validate.errors);
}

exports.schema = schemas[0];
