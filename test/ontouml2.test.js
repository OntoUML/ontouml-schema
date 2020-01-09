const schemas = require('ontouml-schema');
const Ajv = require('ajv');
let ajv = new Ajv();

function testOntoUML2Model(modelPath) {
    let validator = ajv.compile(schemas.getSchema(schemas.ONTOUML_2));
    let model = require(modelPath);
    let valid = validator(model);
    
    if(!valid) { console.log(validator.errors); }
    
    expect(valid).toBeTruthy();
}

test('Model: minimal model', () => {
    testOntoUML2Model('./../examples/model.minimum.json')
});

test('Model: all fields', () => {
    testOntoUML2Model('./../examples/model.all.fields.json')
});

test('Package: minimal package', () => {
    testOntoUML2Model('./../examples/package.all.fields.json')
});

test('Package: all fields', () => {
    testOntoUML2Model('./../examples/package.all.fields.json')
});

test('Class: minimal class', () => {
    testOntoUML2Model('./../examples/class.minimum.json')
});

test('Class: all fields', () => {
    testOntoUML2Model('./../examples/class.all.fields.json')
});

test('Relation: minimal relation', () => {
    testOntoUML2Model('./../examples/relation.minimum.json')
});

test('Relation: all fields', () => {
    testOntoUML2Model('./../examples/relation.all.fields.json')
});

test('Property: minimal property', () => {
    testOntoUML2Model('./../examples/property.minimum.json')
});

test('Property: all fields', () => {
    testOntoUML2Model('./../examples/property.all.fields.json')
});

test('Generalization: minimal generalization', () => {
    testOntoUML2Model('./../examples/generalization.minimum.json')
});

test('Generalization: all fields', () => {
    testOntoUML2Model('./../examples/generalization.all.fields.json')
});

test('GeneralizationSet: minimal generalization set', () => {
    testOntoUML2Model('./../examples/generalizationset.minimum.json')
});

test('GeneralizationSet: all fields', () => {
    testOntoUML2Model('./../examples/generalizationset.all.fields.json')
});

test('propertyAssignments: all options', () => {
    testOntoUML2Model('./../examples/propertyassignments.all.options.json')
});