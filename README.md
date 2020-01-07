# OntoUML Schema

This project defines a JSON Schema-based message for the exchange of OntoUML models.

This project is defined under the umbrella of the [OntoUML Server](https://github.com/OntoUML/ontouml-server) project is stands as a proof of concept for now.

If you are interested to know more, feel free to open an issue to provide feedback on the project or reach our team members for more specific cases:
 * [Claudenir M. Fonseca](https://github.com/claudenirmf)
 * [Tiago Prince Sales](https://github.com/tgoprince)

## Schema Definitions

- root/schema:
    The `ontouml-schema` is an object that represents an OntoUML ontology. Mandatory fields: constant "@type": "Model", "id", "name", "authors", "contents". Additional fields allowed.

- Package:
    An object representing a packge element. Mandatory fields: constant "@type": "Package", "id", "name", "contents", "metaProperties". Additional fields allowed.

- Class:
    An object representing a class element. Mandatory fields: constant "@type": "Class", "id", "name", "stereotypes", "properties", "metaProperties". Additional fields allowed.

- Association:
    An object representing an association element. Mandatory fields: constant "@type": "Class", "id", "name", "stereotypes", "properties", "metaProperties". The "properties" array must have at least two items and is not nullable. The order of these items represents their position on a equivalent predicate, e.g., in the ternary association "buys-product-from(buyer,product,seller)", the order of items representing these entities must follow the order "buyer" (in properties[0]), "product" (in properties[1]), and "seller" (in properties[2]). Additional fields allowed.

- authors:
    A non-empty array of strings representing names of an object's authors. Nullable.

- contents:
    A non-empty array of objects representing model elements. May contain objects representing one of the following types of model elements: "Package", "Class", "Association", "DerivationAssociation", "Generalization", "GeneralizationSet". Nullable.

- id:
    A non-empty string representing an object's unique identifier.

- link:
    A non-empty array of IDs representing a relation between two or more objects. A link is equivalent to a predicate evaluated as *true* for the involved entities (e.g., knows(Bob,Jim) representing that Bob indeed knows Jim). The order of elements in the array carry semantics. The minimum array size is 2. Nullable. Ordered.

- name:
    A non-empty string representing an object's name. Nullable.

- metaProperties:
    A non-empty array of key-value pairs representing an object's meta properties. Meta properties may have any name, but its values are restricted to null, booleans, numbers, strings or arrays of these. Meta properties whose values are other objects must be represented through the IDs (i.e., strings) of these objects. A number of pre-defined meta-properties are defined: "aggregationKind", "isAbstract", "isDerived", "isOrdered", and "isReadOnly". Meta properties are analogous to UML's notion of tagged values. Nullable.

- properties:
    A non-empty array of Property objects representing properties of instances of the container model element. This captures instances of classes, associations and derivation associations, where in the first case properties are analougous to attrbutes while in the second and third cases are analogous to association ends. Nullable.

- stereotypes:
    A non-empty array of non-empty strings representing stereotypes of its container object. Nullable.