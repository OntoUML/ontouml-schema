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

This section describes the object types defined in the OntoUML Schema.

The type of an object is identified by the field "type".

All fields defined for an object type are MANDATORY, but only some are not nullable. 

Additional fields are NOT allowed for any object type.

- **Package**: An object representing an ontology or an ontology (sub)module.
    
    ```json
    { 
        "type": "Package",
        "id": "1",
        "name": "UFO-S",
        "description": "A commitment-based ontology of services.",
        "elements": [ ... ],
        "propertyAssignments": { ... }
    }
    ```

- **Class**: An object representing a type defined in the ontology.

    ```json
    { 
        "type": "Class",
        "id": "1",
        "name": "Service Provider",
        "description": "A role played by the agent providing a service.",
        "stereotypes": ["roleMixin"],
        "isAbstract": true,
        "isDerived": false,
        "properties": [ ... ],
        "literals": null,
        "propertyAssignments": { ... }
    }
    ```

    An enumeration is represented as a class with the "enumeration" stereotype and its values using the field "literals".

    ```json
    { 
        "type": "Class",
        "id": "2",
        "name": "Color",
        "description": null,
        "stereotypes": ["enumeration"],
        "isAbstract": false,
        "isDerived": false,
        "properties": null,
        "literals": [
            {
                "type": "Literal",
                "id": "0",
                "name": "Red",
                ...
            },
            {
                "type": "Literal",
                "id": "1",
                "name": "Blue",
                ...
            },
            ...
        ],
        "propertyAssignments": { ... }
    }
    ```
- **Literal**: An object representing a value defined for an enumeration.

    ```json
    {
          "type": "Literal",
          "id": "0",
          "name": "Red",
          "description": "Classic red. Hex Code: #FF0000 Decimal Code: rgb(255,0,0)",
          "propertyAssignments": { ... }
        }
    ```

- **Relation**: An object representing a relation defined in the ontology. 
    
    ```json
    { 
        "type": "Relation",
        "id": "1",
        "name": "hires",
        "description": "A relation between a service customer and a service provider.",
        "stereotypes": ["material"],
        "isAbstract": false,
        "isDerived": true,
        "properties": [
            {
                "type": "Property",
                "id": "1",
                "name": "customer",
                "propertyType": {
                    "type": "Class",
                    "id": "1"
                },
                ...
            },
            {
                "type": "Property",
                "id": "2",
                "name": "provider",
                "propertyType": {
                    "type": "Class",
                    "id": "2"
                },
                ...
            }
        ],
        "literals": null,
        "propertyAssignments": { ... }
    }
    ```

  The field "properties" is a non-nullable ordered array of objets of type "Property" with a minimum size of 2. 
  
  The order of the properties in this array represents their position on a equivalent predicate, e.g., in the ternary relation "buys-product-from(buyer,product,seller)", the order of items representing these entities must follow the order "buyer" (in properties[0]), "product" (in properties[1]), and "seller" (in properties[2]).
  
  Relation elements are also used to represent derivation relations, in which case they must contain the stereotype "derivation" and have only 2 properties, the first being an object of type "Relation" and the second an object of type "Class" element.

- **Generalization**: An object representing a generalization defined in the ontology. 
    
    ```json
    {
        "type": "Generalization",
        "id": "1",
        "name": "G1",
        "description": null,
        "general": {
            "type": "Class",
            "id": "1"
        },
        "specific": {
            "type": "Class",
            "id": "2"
        },
        "propertyAssignments": { ... }
    }
    ```

- **GeneralizationSet**:
    An object representing a generalization set defined in the ontology. 
    
    ```json
    {
        "type": "GeneralizationSet",
        "id": "1",
        "name": "Gender Set",
        "description": null,
        "categorizer": {
            "type": "Class",
            "id": "1"
        },
        "generalizations": [
            {
                "type": "Generalization",
                "id": "1"
            },
            {
                "type": "Generalization",
                "id": "2"
            }
        ],
        "isDisjoint": true,
        "isComplete": true,
        "propertyAssignments": { ... }
    }
    ```

- **Property**:
    An object representing a property defined in the ontology. Properties contained by classes are deemed attributes and those contained by relations are deemed association ends. 
    
    ```json
    {
        "type": "Property",
        "id": "0",
        "name": "name",
        "description": null,
        "propertyType": {
            "type": "Class",
            "id": "0"
        },
        "cardinality": "1..1",
        "isDerived": false,
        "isOrdered": false,
        "isReadOnly": false,
        "stereotypes": null,
        "aggregationKind": null,
        "subsettedProperties": [
            {
                "type": "Property",
                "id": "1"
            }
        ],
        "redefinedProperties": [ ... ],
        "propertyAssignments": { ... }
    }
    ```

- **contents**: A non-empty nullable array of objects representing model elements. Possible object types in this array are: "Package", "Class", "Relation", "Generalization", "GeneralizationSet".

- **id**: A non-empty and non-nullable string that uniquely identifies an object of a given type. Thus, two objects of the same type (e.g. two classes, two relations, two properties) may not have the same id, even if they are contained by different packages.

- **name**: A non-empty nullable string containing the object's name. It is allowed for two objects of the ontology to have identical names, even if they are of the same type,.

- **description**: A non-empty nullable string representing the description of the object in free textual format.

- **properties**:
    A non-empty array of Property elements representing properties exhibited by instances of the container model element. Nullable.

- **propertyAssignments**:
    A non-empty array of key-value pairs representing assignments to instantiated properties instantiated by the container object. Assignments may have any key name, but its values are restricted to null, booleans, numbers, strings, references or arrays of these. Assignments are analogous to UML's notion of tagged values. Nullable.

- **reference**:
    An object representing a singular reference to a model element. Mandatory fields: "type", "id".

- **stereotypes**:
    A non-empty array of non-empty strings representing stereotypes of its container object. Nullable.