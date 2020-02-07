# OntoUML Schema

This project defines a JSON Schema message format for the exchange of OntoUML models.

This project is defined under the umbrella of the [OntoUML Server](https://github.com/OntoUML/ontouml-server) project and stands as a proof of concept at the moment.

If you are interested to know more, feel free to open an issue to provide feedback on the project or reach our team members for more specific cases:
 * [Claudenir M. Fonseca](https://github.com/claudenirmf)
 * [Tiago Prince Sales](https://github.com/tgoprince)
 * [Lucas Bassetti](https://github.com/LucasBassetti)
 * [Victor Viola](https://github.com/victorviola)

## How to use

[JSON Schema](https://json-schema.org/) is a popular web standard for definition and validation of JSON files. The standard employs JSON files describing valid schema formats as input to validation software to check the validity of any other JSON file its is feed with.

The code excerpt bellow, examplifies how to use the `ontouml-schema` project to validate objects representing OntoUML 2 models:

```javascript
const schemas = require('ontouml-schema');
const Ajv = require('ajv');

let validator = new Ajv().compile(schemas.getSchema(schemas.ONTOUML_2));
let model = {
    "type": "Model",
    "id": "m1",
    "name": "My Model",
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
```

Even though the source in this repository is developed for Javascript projects, the schema files themselves available in ours releases can be used in any of JSON Schema's validators which [available for all major programming languages](https://json-schema.org/implementations.html).

## OntoUML 2

This section describes all fields in a OntoUML 2 model.

- root/Model:
    An object that represents an OntoUML 2 ontology. Mandatory fields: constant "type": "Model", "id", "name", 
- Package:
    An object representing a packge element. Mandatory fields: constant "type": "Package", "id", "name", "elements", "propertyAssignments". Additional fields NOT allowed.

- Class:
    An object representing a class element. Mandatory fields: constant "type": "Class", "id", "name", "stereotypes", "properties", "propertyAssignments", "isAbstract", "isDerived". Additional fields NOT allowed.

- Relation:
    An object representing an relation element. Mandatory fields: constant "type": "Class", "id", "name", "stereotypes", "properties", "propertyAssignments". The "properties" array must have at least two items and is not nullable. The order of these items represents their position on a equivalent predicate, e.g., in the ternary relation "buys-product-from(buyer,product,seller)", the order of items representing these entities must follow the order "buyer" (in properties[0]), "product" (in properties[1]), and "seller" (in properties[2]). Relation elements are also used to represent derivation relations, in which case they must contain the stereotype "ontouml/derivation" and have only 2 properties, the first being a Relation element and the second a Class element. Additional fields NOT allowed. Ordered properties.

- Generalization:
    An object representing a generalization element. Mandatory fields: constant "type": "Generalization", "id", "name", "general", "specific", "propertyAssignments". Additional fields NOT allowed.

- GeneralizationSet:
    An object representing a generalization set element. Mandatory fields: constant "type": "GeneralizationSet", "id", "name", "isDisjoint", "isComplete", "categorizer", "generalizations", "propertyAssignments". Additional fields NOT allowed.

- Property:
    An object representing a property element. This represents properties exhibited by instances of classes, relations and derivation relations, where in the first case properties are analougous to attrbutes while in the second and third cases properties are analogous to association ends. Mandatory fields: constant "type": "Property", "id", "name", "propertyType", "cardinality", "stereotypes", "propertyAssignments", "subsettedProperties", "redefinedProperties", "aggregationKind", "isDerived", "isOrdered", "isReadOnly". Additional fields NOT allowed.

- authors:
    A non-empty array of strings representing names of an object's authors. Nullable.

- elements:
    A non-empty array of objects representing model elements. May contain objects representing one of the following types of model elements: "Package", "Class", "Relation", "Generalization", "GeneralizationSet". Nullable.

- id:
    A non-empty string representing an object's unique identifier.

- name:
    A non-empty string representing an object's name. Nullable.

- properties:
    A non-empty array of Property elements representing properties exhibited by instances of the container model element. Nullable.

- propertyAssignments:
    A non-empty array of key-value pairs representing assignments to instantiated properties instantiated by the container object. Assignments may have any key name, but its values are restricted to null, booleans, numbers, strings, references or arrays of these. Assignments are analogous to UML's notion of tagged values. Nullable.

- reference:
    An object representing a singular reference to a model element. Mandatory fields: "type", "id".

- stereotypes:
    A non-empty array of non-empty strings representing stereotypes of its container object. Nullable.