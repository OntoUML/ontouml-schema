const ontoumlSchema = require('./../schemas/ontouml.schema.json');
const Ajv = require('ajv');
let ajv = new Ajv();
let validator = ajv.compile(ontoumlSchema);

function testModel(modelPath) {
    let model = require(modelPath);
    let valid = validator(model);
    
    if(!valid) { console.log(validator.errors); }
    
    expect(valid).toBeTruthy();
}

test('Model: minimal model', () => {
    testModel('./../examples/model.minimum.json')
});

test('Model: all fields', () => {
    testModel('./../examples/model.all.fields.json')
});

test('Package: minimal package', () => {
    testModel('./../examples/package.all.fields.json')
});

test('Package: all fields', () => {
    testModel('./../examples/package.all.fields.json')
});

test('Class: minimal package', () => {
    testModel('./../examples/class.minimum.json')
});

test('Class: all fields', () => {
    testModel('./../examples/class.all.fields.json')
});

test('Association: minimal package', () => {
    testModel('./../examples/association.minimum.json')
});

test('Association: all fields', () => {
    testModel('./../examples/association.all.fields.json')
});

test('Property: minimal package', () => {
    testModel('./../examples/property.minimum.json')
});

test('Property: all fields', () => {
    testModel('./../examples/property.all.fields.json')
});

test('Generalization: minimal package', () => {
    testModel('./../examples/generalization.minimum.json')
});

test('Generalization: all fields', () => {
    testModel('./../examples/generalization.all.fields.json')
});

test('GeneralizationSet: minimal package', () => {
    testModel('./../examples/generalizationset.minimum.json')
});

test('GeneralizationSet: all fields', () => {
    testModel('./../examples/generalizationset.all.fields.json')
});

test('propertyAssignments: all options', () => {
    testModel('./../examples/propertyassignments.all.options.json')
});