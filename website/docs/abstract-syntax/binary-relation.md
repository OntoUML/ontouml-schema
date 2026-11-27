---
sidebar_position: 6
description: The BinaryRelation model element — a classifier that defines the properties of a relation between two members.
---

# Binary Relation

A **relation between two members**: it connects two classes, as `studies in` connects `Student` and
`University`.

| Property | Type               | Description    |
| -------- | ------------------ | -------------- |
| `type`   | `"BinaryRelation"` | Discriminator. |

`BinaryRelation` carries the properties of [`Classifier`](./classifier.md) (`isDerived`,
`isAbstract`, `properties`), [`Decoratable`](./decoratable.md) (`stereotype`), and the
[properties common to all model elements](./index.md). A binary relation's two ends are
[`Property`](./property.md) elements referenced, **in order**, from its `properties` array
(inherited from `Classifier`).

The example below is the `«material» studies in` relation connecting the classes `Student` and
`University`. Its two ends — the `Property` elements listed in `properties` — are drawn with their
cardinalities (`1..*` at each end). Material relations are derived from their truthmaker (here, an
`Enrollment` relator), so `isDerived` is `true`; a [derivation](./dependency.md#derivation)
dependency links the relation to that relator.

```mermaid
classDiagram
  class Student
  class University
  Student "1..*" -- "1..*" University : «material» studies in
```

```json
{
  "type": "BinaryRelation",
  "id": "relation_1",
  "name": { "en": "studies in" },
  "stereotype": "material",
  "isDerived": true,
  "isAbstract": false,
  "properties": ["end_source", "end_target"],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

The ends themselves are separate [`Property`](./property.md) objects, listed elsewhere in the
document and referenced by id from `properties`. Each end carries the cardinality drawn on the
diagram and points, via `propertyType`, to the class it connects — `end_source` to `Student` and
`end_target` to `University`.

```json
{
  "type": "Property",
  "id": "end_source",
  "name": null,
  "stereotype": null,
  "isDerived": false,
  "propertyType": "class_student",
  "cardinality": "1..*",
  "aggregationKind": null,
  "isOrdered": false,
  "isReadOnly": false,
  "subsettedProperties": [],
  "redefinedProperties": [],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

```json
{
  "type": "Property",
  "id": "end_target",
  "name": null,
  "stereotype": null,
  "isDerived": false,
  "propertyType": "class_university",
  "cardinality": "1..*",
  "aggregationKind": null,
  "isOrdered": false,
  "isReadOnly": false,
  "subsettedProperties": [],
  "redefinedProperties": [],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

## Parthood and aggregation {#parthood}

Parthood relations record which end is the **whole** through the `aggregationKind` of that end. The
example below is a `«componenthood»` relation between the whole `Car` and its part `Engine`. In UML
it is drawn with a filled diamond at the whole end.

```mermaid
classDiagram
  class Car
  class Engine
  Car "1" *-- "1..*" Engine : «componenthood»
```

```json
{
  "type": "BinaryRelation",
  "id": "relation_3",
  "name": null,
  "stereotype": "componenthood",
  "isDerived": false,
  "isAbstract": false,
  "properties": ["end_car", "end_engine"],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

The whole end (`end_car`) sets `aggregationKind` to `"COMPOSITE"` — the filled diamond. The part end
(`end_engine`) illustrates two further flags: `isOrdered` (the order of a car's engines is
meaningful) and `isReadOnly` (an engine cannot be reassigned to another car once linked).

```json
{
  "type": "Property",
  "id": "end_car",
  "name": null,
  "stereotype": null,
  "isDerived": false,
  "propertyType": "class_car",
  "cardinality": "1",
  "aggregationKind": "COMPOSITE",
  "isOrdered": false,
  "isReadOnly": false,
  "subsettedProperties": [],
  "redefinedProperties": [],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

```json
{
  "type": "Property",
  "id": "end_engine",
  "name": null,
  "stereotype": null,
  "isDerived": false,
  "propertyType": "class_engine",
  "cardinality": "1..*",
  "aggregationKind": "NONE",
  "isOrdered": true,
  "isReadOnly": true,
  "subsettedProperties": [],
  "redefinedProperties": [],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```
