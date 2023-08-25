const schemas = require('ontouml-schema');
const Ajv = require('ajv');
let ajv = new Ajv();

function testOntoUML2Model(modelPath) {
  let validator = ajv.compile(schemas.getSchema(schemas.ONTOUML_2));
  let model = require(modelPath);
  let valid = validator(model);

  if (!valid) {
    console.log(validator.errors);
  }

  expect(valid).toBeTruthy();
}

test('Package: minimal package', () => {
  testOntoUML2Model('./test_models/package.minimum.json');
});

test('Package: all fields', () => {
  testOntoUML2Model('./test_models/package.all.fields.json');
});

test('Class: minimal class', () => {
  testOntoUML2Model('./test_models/class.minimum.json');
});

test('Class: all fields', () => {
  testOntoUML2Model('./test_models/class.all.fields.json');
});

test('Relation: minimal relation', () => {
  testOntoUML2Model('./test_models/relation.minimum.json');
});

test('Relation: all fields', () => {
  testOntoUML2Model('./test_models/relation.all.fields.json');
});

test('Property: minimal property', () => {
  testOntoUML2Model('./test_models/property.minimum.json');
});

test('Property: all fields', () => {
  testOntoUML2Model('./test_models/property.all.fields.json');
});

test('Literal: minimal property', () => {
  testOntoUML2Model('./test_models/literal.minimum.json');
});

test('Attribute with null property type: all fields', () => {
  testOntoUML2Model('./test_models/null-property-type.json');
});

test('Generalization: minimal generalization', () => {
  testOntoUML2Model('./test_models/generalization.minimum.json');
});

test('Generalization: all fields', () => {
  testOntoUML2Model('./test_models/generalization.all.fields.json');
});

test('GeneralizationSet: minimal generalization set', () => {
  testOntoUML2Model('./test_models/generalizationset.minimum.json');
});

test('GeneralizationSet: all fields', () => {
  testOntoUML2Model('./test_models/generalizationset.all.fields.json');
});

test('propertyAssignments: all options', () => {
  testOntoUML2Model('./test_models/propertyassignments.all.options.json');
});
