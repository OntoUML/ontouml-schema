const Ajv = require('ajv');
const schemaFile = require("./../schemas/ontouml.schema.json");

module.exports = {

  getSchema : function() {
    return schemaFile;
  },

  getValidator: function() {
    var schema = schemaFile;
    var ajv = new Ajv({schemas: [schema]});
    return ajv.getSchema("https://ontouml.org/OntoUMLSchema/v1/Model");
  }

}
