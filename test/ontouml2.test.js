const schemas = require('ontouml-schema');
const models = require('./test_models');
const Ajv = require('ajv');
let ajv = new Ajv();

function testOntoUML2Model(model) {
  let validator = ajv.compile(schemas.getSchema(schemas.ONTOUML_2));
  let valid = validator(model);

  if (!valid) {
    console.log(validator.errors);
  }

  expect(valid).toBeTruthy();
}

test('Package: minimal package', () => {
  testOntoUML2Model(models.packageMinimum);
});

test('Package: all fields', () => {
  testOntoUML2Model(models.packageAllFields);
});

test('Class: minimal class', () => {
  testOntoUML2Model(models.classMinimum);
});

test('Class: all fields', () => {
  testOntoUML2Model(models.classAllFields);
});

test('Relation: minimal relation', () => {
  testOntoUML2Model(models.relationMinimum);
});

test('Relation: all fields', () => {
  testOntoUML2Model(models.relationAllFields);
});

test('Property: minimal property', () => {
  testOntoUML2Model(models.propertyMinimum);
});

test('Property: all fields', () => {
  testOntoUML2Model(models.propertyAllFields);
});

test('Literal: minimal literal', () => {
  testOntoUML2Model(models.literalMinimum);
});

test('Attribute with null property type: all fields', () => {
  testOntoUML2Model(models.nullPropertyType);
});

test('Generalization: minimal generalization', () => {
  testOntoUML2Model(models.generalizationMinimum);
});

test('Generalization: all fields', () => {
  testOntoUML2Model(models.generalizationAllFields);
});

test('GeneralizationSet: minimal generalization set', () => {
  testOntoUML2Model(models.generalizationSetMinimum);
});

test('GeneralizationSet: all fields', () => {
  testOntoUML2Model(models.generalizationSetAllFields);
});

test('GeneralizationSet: no generalizations', () => {
  testOntoUML2Model(models.noGeneralizationInGS);
});

test('propertyAssignments: all options', () => {
  testOntoUML2Model(models.propertyAssignmentsAllOptions);
});
