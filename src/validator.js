const Ajv = require('ajv');
const fs = require('fs');
const ds = require("./../schemas/ontouml.schema.json");

// let schemaFiles = [
//   "schemas/ontouml.schema.json"
// ];
//
// let schemas = schemaFiles.map( file => {
//   return JSON.parse(fs.readFileSync(file, 'utf8'))
// })
//
// let ajv = new Ajv({schemas: schemas});
// let validate = ajv.getSchema("https://ontouml.org/OntoUMLSchema/v1/Model");
//
// let object = JSON.parse(fs.readFileSync("examples/m1.example.json", 'utf8'))
// let isValid = validate(object);
//
// if(isValid)
//   console.log("Model M1 is VALID!");
// else {
//   console.log("Model M1 is INVALID!");
//   console.log(validate.errors);
// }

module.exports = {
  getSchema : function() {
    return ds;
    //return JSON.parse(fs.readFileSync("./../schemas/ontouml.schema.json", 'utf8'))
  },
  getValidator: function() {
    var schema = this.getSchema();
    var asd = new Ajv({schemas: [schema]});
    return asd.getSchema("https://ontouml.org/OntoUMLSchema/v1/Model");
  }
}
